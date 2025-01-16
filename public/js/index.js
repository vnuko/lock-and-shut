async function post(url, payload = {}) {
  console.log(`Sending POST request to: ${url}`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();

    if (json.success === false) {
      throw new Error(json.message || "Request returned error");
    }
  } catch (error) {
    console.error("Error occurred:", error.message);
    throw error;
  }
}
