import { useCallback, useEffect, useRef, useState } from "react";
import { client } from "../services/api";

type THttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface IOptions {
  method?: THttpMethod;
  body?: any;
  params?: Record<string, any>;
  limit?: number;
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useAPI<T>(url: string, options: IOptions) {
  const {
    method = "GET",
    body,
    params,
    limit,
    immediate = true,
    onSuccess,
    onError,
  } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(limit ?? 10);
  const [count, setCount] = useState(0);

  const [uploadProgress, setUploadProgress] = useState(0);

  const onSuccessRef = useRef(onSuccess);
  const onErrorRef = useRef(onError);
  useEffect(() => {
    onSuccessRef.current = onSuccess;
    onErrorRef.current = onError;
  }, [onSuccess, onError]);

  const fetchData = useCallback(
    async (customBody?: any, extraURL?: string, noSlash?: boolean) => {
      setLoading(true);
      setError(null);
      setUploadProgress(0);
      try {
        const finalParams = limit
          ? method == "GET"
            ? { ...params, page: page, limit: rowsPerPage }
            : { ...params }
          : method == "GET"
            ? { ...params, page: page }
            : { ...params };
        const requestBody = customBody !== undefined ? customBody : body;
        let finalURL;
        if (extraURL) {
          if (noSlash) {
            finalURL = `${url}${extraURL}`;
          } else {
            finalURL = `${url}/${extraURL}`;
          }
        } else {
          finalURL = url;
        }

        const res = await client({
          url: finalURL,
          method,
          data: requestBody,
          params: finalParams,

          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentage = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              setUploadProgress(percentage);
            }
          },
        });
        setData(res.data);
        setCount(res.data.count);
        onSuccessRef.current?.(res.data);
      } catch (error) {
        setError(error as Error);
        onErrorRef.current?.(error as Error);
      } finally {
        setLoading(false);
      }
    },
    [url, method, body, params, page, rowsPerPage],
  );

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  return {
    data,
    loading,
    error,
    page,
    rowsPerPage,
    setPage,
    count,
    refetch: fetchData,
    uploadProgress,
  };
}
