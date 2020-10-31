const baseUrl = 'http://localhost:3000';

const api = {
  training: {
    getAll: () =>
      fetch(`${baseUrl}/trainings`, { mode: 'cors' }).then(response =>
        response.json(),
      ),
    get: () =>
      fetch(`${baseUrl}/trainings/places`, { mode: 'cors' }).then(response =>
        response.json(),
      ),
    getSchedule: type =>
      fetch(`${baseUrl}/trainings/schedule?type=${type}`, {
        mode: 'cors',
      }).then(response => response.json()),
    getTrainingByDate: date =>
      fetch(`${baseUrl}/trainings/date?date=${date}`, {
        mode: 'cors',
        headers: {
          Authorization: window.localStorage.getItem('token'),
        },
      }).then(response => response.json()),
    post: values =>
      fetch(`${baseUrl}/trainings`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: window.localStorage.getItem('token'),
        },
        body: JSON.stringify({
          type: values.type,
          place: values.place,
          name: values.name,
          time: values.time,
          date: values.date,
          coach: values.coach,
        }),
      }),
    createAppointment: values =>
      fetch(`${baseUrl}/trainings/appointment`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: values.id,
          name: values.name,
        }),
      }),
  },
  user: {
    getUser: values =>
      fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      }).then(response => response.json()),
  },
};

// @ts-ignore
window.api = api;

export default api;
