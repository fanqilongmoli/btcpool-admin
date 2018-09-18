import {message} from 'antd';

export function config() {
  return {
    onError(err) {
      err.preventDefault();
      const error = err.message;
      if (error instanceof Array)
        error.forEach(e => message.error(e));
      else
        message.error(error);
    }
  };
}
