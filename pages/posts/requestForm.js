import Head from "next/head";
import Layout from "../../components/layout";

function RequestForm() {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        // phnum: event.target.phnum.value,
        message: event.target.message.value,

        upload: event.target.file.value,
        submit: event.target.reset(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };

  return (
    <Layout>
      <Head>
        <title>Form</title>
      </Head>
      <form onSubmit={registerUser}>
        <label htmlFor='name'>Name </label>
        <input id='name' name='name' type='text' autoComplete='name' required />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          required
        />
        <label htmlFor='textarea'>How can we help?</label>
        <textarea
          id='registerUser'
          name='message'
          rows='4'
          cols='60'
          required
        />
        <label htmlFor='upload'>Upload a file</label>
        <input id='file' name='upload' type='file' />
        <button type='submit' submit='submit'>
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default RequestForm;
