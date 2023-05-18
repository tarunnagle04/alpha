const Home_Form = () => {
  return (
    <>
      <div className="Form_Connect">
        <h2>Connect with us</h2>
        <p>For oustanding protective overlaminates</p>
      </div>
      <div className="forms_info">
        <div className="First_Name">
          <label htmlFor="First_Name">First Name</label>
          <input
            type="text"
            id="First_Name"
            placeholder="First Name"
            name="First_name"
          />
        </div>

        <div className="Last_Name">
          <label htmlFor="Last_Name">Last Name</label>
          <input
            type="text"
            id="Last_Name"
            placeholder="Last Name"
            name="Last_name"
          />
        </div>

        <div className="Emails">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            placeholder="First Name"
            name="Email"
          />
        </div>

        <label htmlFor="Contact">Contact</label>
        <input
          type="number"
          id="Contact"
          placeholder="Contact"
          name="Contact"
        />
        <label htmlFor="Company">Company</label>
        <input
          type="number"
          id="Company"
          placeholder="Company Name"
          name="Company"
        />
        <div className="state">
          <label htmlFor="State">State</label>
          <select name="State" id="State">
            <option value="AL">Alabama</option>
            <option value="California">California</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
          </select>
        </div>
      </div>
      <div className="Describe">
        <label htmlFor="Describe">How would you Describe Yourself</label>
        <input type="text" id="Describe" />
      </div>
    </>
  );
};

export default Home_Form;
