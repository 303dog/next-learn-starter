export default function ContactForm() {
  return (
    <form
      name='contact'
      action='/success'
      method='POST'
      netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <label type='hidden'>
        <input type='hidden' name='bot-field' />
      </label>
      <input type='hidden' name='form-name' value='contact' />
      <p>
        <label htmlFor='yourname'>First Name:</label> <br />
        <input type='text' name='firstname' id='firstname' /><br/>
        <label htmlFor='yourname'>Last Name:</label> <br />
        <input type='text' name='name' id='yourname' />
      </p>
      <p>
      <label htmlFor='phone'>Phone #:</label> <br />
        <input type='tel' name='phone' id='phone' maxlength='12'/>
      </p>
      <p>
        <label htmlFor='youremail'>Your Email:</label> <br />
        <input type='email' name='email' id='youremail' />
      </p>
      <label htmlFor='company'>Company:</label> <br />
        <input type='text' name='text' id='companyname' />
      <p>
        <label htmlFor='yourmessage'>Message: <br />
        <textarea name='message' id='yourmessage' maxlength='500'></textarea></label>
      </p>
      <label htmlFor='upload'>Upload a file</label>
      <input name='upload' type='file' />
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
}
