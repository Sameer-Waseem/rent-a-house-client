import { toast } from "react-toastify";

const useNotify = () => {
  const notifyInfo = (msg: string) => toast.info(msg);
  const notifySuccess = (msg: string) => toast.success(msg);
  const notifyError = (msg: string) => toast.error(msg);

  return { notifyInfo, notifySuccess, notifyError };
};

export default useNotify;
