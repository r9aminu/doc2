import { useEffect, useState } from "react";

export function PreLoader() {
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTimeout(true);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (isTimeout) return <></>;

  return (
    <div className="preloader">
      <div className="circle" />
    </div>
  );
}
