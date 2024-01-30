import { APIGatewayProxyEventV2, Context } from 'aws-lambda';
import { errorResponse } from './response';

export interface IRoutes {
  [key: string]: (_event: APIGatewayProxyEventV2, _context: Context) => unknown;
}

const selectRoute = (routes: IRoutes, event: APIGatewayProxyEventV2, context: Context) => (routeKey: string) => {
  return (routes[routeKey] || routes['default'])(event, context);
};

export const slsRouter = (routes: IRoutes, event: APIGatewayProxyEventV2, context: Context) => {
  const { body, routeKey } = event;
  event.body = body && typeof body === 'string' ? JSON.parse(body) : body;

  try {
    const route = selectRoute(routes, event, context);
    return route(routeKey);
  } catch (error) {
    return errorResponse(context, 500, error);
  }
};
