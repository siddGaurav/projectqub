
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const contactApi = async (formData: ContactForm) => {
  try {
    const Db_url = process.env.NEXT_PUBLIC_DB_URL as string
    console.log(process.env.Db_url)
    const res = await fetch(`${Db_url}/app/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;

  } catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  }

  throw new Error("Something went wrong");
}
};