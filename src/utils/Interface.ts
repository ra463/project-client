// MyError.ts
interface MyError {
  response: {
    data: {
      message: string;
    };
  };
}

export default MyError;
