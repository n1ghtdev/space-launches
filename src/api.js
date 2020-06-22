const API_URL = 'https://launchlibrary.net/1.3/';

export async function fetchLaunches() {
  try {
    const response = await fetch(`${API_URL}/launch/next/9`);
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new Error(json.msg);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchLaunchById(id) {
  try {
    const response = await fetch(`${API_URL}/launch/${id}`);
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new Error(json.msg);
  } catch (error) {
    throw new Error(error.message);
  }
}
