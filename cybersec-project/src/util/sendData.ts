export default async function sendData(data: any) {
  if (data) {
    const response = await fetch("http://localhost:5000/payment", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return true;
    }
    return false;
  }
  return false;
}
