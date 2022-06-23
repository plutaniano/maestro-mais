import { createServer, Response } from 'miragejs';
import Cookie from 'js-cookie';
import USERS from './mock_data/users.json';
import CALCULADORA from './mock_data/calculadora.json';
import HISTORY from './mock_data/history.json';
import PARETO from './mock_data/pareto.json';
import SELF from './mock_data/self.json';
import LATESTMONTH from './mock_data/latestmonth.json';
import XPACCOUNTS from './mock_data/xpaccounts.json';

export default function makeServer({ environment }) {
  if (environment !== 'development') {
    return;
  }

  createServer({
    environment,

    routes() {
      this.urlPrefix = 'https://api.maestrocapital.com.br';

      this.get('users/', () => USERS);
      this.get('users/:id/calculadora/', () => CALCULADORA);
      this.put('users/:id/calculadora/', () => null);
      this.get('xpaccounts/', () => XPACCOUNTS);
      this.get('users/:id/pareto/', () => PARETO);
      this.get('users/:id/history/', () => HISTORY);
      this.get('users/:id/latestmonth/', () => LATESTMONTH);
      this.get('token/logout/', () => {
        document.cookie = 'refreshToken=""; expires=Tue, 19 Apr 2022 16:33:00 GMT; Max-Age=-1; Path=/';
        return { ok: true };
      });
      this.get('token/refresh/', () => {
        if (Cookie.get('refreshToken')) {
          return { access: Math.random(), user: SELF };
        }
        return Response(401);
      });
      this.get('token/', (schema, request) => {
        if (!request.queryParams.code) {
          return new Response(400);
        }
        const body = { access: Math.random(), user: SELF };
        document.cookie = 'refreshToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1MDM5NjAxNiwiaWF0IjoxNjUwMzA5NjE2LCJqdGkiOiJiYzg2OTZiMzFmYmI0N2IwOWZiNGU3NGI2YmNkZWNiMiIsInVzZXJfaWQiOjF9.Hs97AffWmYKq8ouq3A7yXgcZ5ysMbZO50yKgJrN0m0I; expires=Mon, 25 Apr 2022 19:20:16 GMT; Max-Age=604800; Path=/';
        return new Response(200, {}, body);
      });
    },
  });
}
