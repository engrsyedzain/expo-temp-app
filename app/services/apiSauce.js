import { create } from "apisauce";

const api = create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

class ApiSauce {
  //   async delete(url, data, headers) {
  //     const updatedHeader = getUpdatedHeader(headers);

  //     const response = await api.delete(url, data, { headers: updatedHeader });

  //     if (__DEV__ && API_LOG) {
  //       console.log(response);
  //     }

  //     return new Promise((resolve, reject) => {
  //       this.handlePromise(resolve, reject, response);
  //     });
  //   }

  //   async put(url, data, headers) {
  //     const updatedHeader = getUpdatedHeader(headers);

  //     const response = await api.put(url, data, { headers: updatedHeader });

  //     if (__DEV__ && API_LOG) {
  //       console.log(response);
  //     }

  //     return new Promise((resolve, reject) => {
  //       this.handlePromise(resolve, reject, response);
  //     });
  //   }

  // for normal post requests

  async post(url, data, token = null) {
    if (token !== null) {
      api.setHeaders({
        "Authorization-Token": `${token}`,
      });
    }
    return await api.post(url, data);
  }

  async get(url, token = null) {
    //  const token = data && data.accessToken && data.accessToken;
    if (token !== null) {
      api.setHeaders({
        "Authorization-Token": `${token}`,
      });
    }
    return await api.get(url);
  }
}

export default new ApiSauce();
