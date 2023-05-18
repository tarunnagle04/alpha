const Home_Form = () => {
  return (
    <>
      <div className="Form_Wrapper">
        <h2>Connect with us</h2>
        <h6>For outstanding protective overlaminates</h6>
        <div className="HomeFormCom">
          <form action="">
            <div className="Form_Flex">
              <label htmlFor="First Name" id="First_Name_Label">
                First Name
              </label>
              <input type="text" id="First_Name" name="First_Name" />
              <br />
              <label htmlFor="Last Name" id="Last_Name_Label">
                Last Name
              </label>
              <input type="text" id="Last_Name" name="Last_Name" />
              <br />
              <br />
            </div>
            <br />
            <div className="Form_Flex">
              <label htmlFor="Email" id="Email_Label">
                Email
              </label>
              <br />
              <input type="email" id="email" name="email" />
              <br />
              <label htmlFor="Contact Number" id="Contact_Label">
                Contact Number
              </label>
            </div>
            <br />
            <input type="number" max="10" id="Number" name="Number" />
            <br />
            <div className="Form_Flex">
              <label htmlFor="Company" id="Company_Label">
                Company
              </label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="State" id="State_Label">
                State
              </label>
              <br />
              <select name="State" id="State_Select">
                <br />
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashta">Maharashta</option>
                <option value="Delhi">Delhi</option>
                <option value="Haryana">Haryana</option>
                <option value="Panjab">Panjab</option>
              </select>
            </div>
            <br />
            <label
              htmlFor="How would you describe Yourself"
              id="Describe_Label"
            >
              How would you describe Yourself
            </label>
            <br />
            <select name="<br />Describe" id="Describe">
              <option value="Installer">Installer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Back End Developer">Back End Developer</option>
            </select>
            <br />
            <label htmlFor="Preffered Distributor" id="Distributor_Label">
              Preffered Distributor
            </label>
            <br />
            <select name="Preferred_Distributor" id="Preferred_Distributor">
              <br />
              <option value="Aerotech">Aerotech</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
            <br />
            <label htmlFor="Additional Info" id="Additional_Label">
              Additional Info
            </label>
            <input type="text" id="Addi_Info" name="Addi_Info" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home_Form;
