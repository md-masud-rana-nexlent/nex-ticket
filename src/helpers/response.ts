import { Context } from 'aws-lambda';
import { Response } from 'express';

const formatServerlessResponse = (statusCode: number, message: string, data: unknown) => {
  if (data) {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } else {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
    };
  }
};

type GenericResponse = Response | Context;

const formatResponse = (res: GenericResponse, message: string, statusCode: number, body: unknown) => {
  if ('json' in res) {
    // For express (Node.js) environment
    if (body) return res.status(statusCode).json(body);

    return res.status(statusCode).json(message);
  }
  //   serverless (aws lambda)
  return formatServerlessResponse(statusCode, message, body);
};

export const successResponse = (res: GenericResponse, body: unknown) => {
  return formatResponse(res, 'success', 200, body);
};

export const errorResponse = (res: GenericResponse, statusCode: number, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constraints;
    const errorMesssage = errorObject[Object.keys(errorObject)[0]] || 'Error Occured';
    return formatResponse(res, 'error', statusCode, errorMesssage);
  }

  return formatResponse(res, `${error}`, statusCode, error);
};
