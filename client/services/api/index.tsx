import { time } from 'console';

const baseUrl = 'http://localhost:3000';

const api = {
  training: {
    get: () =>
      fetch(`${baseUrl}/trainings`, { mode: 'cors' }).then(response =>
        response.json(),
      ),
    post: (values, type) =>
      fetch(`${baseUrl}/trainings`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: type,
          place: values.place,
          name: values.name,
          time: values.time,
          date: values.date,
          coach: 'vasy',
        }),
      }),
  },
};

export default api;
