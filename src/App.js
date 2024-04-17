import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isCompanyTouched, setIsCompanyTouched] = useState(false);
  const [isCountrySelectorTouched, setIsCountrySelectorTouched] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleCountrySelectorBlur = () => {
    setIsCountrySelectorTouched(true);
  };

  const handleFirstNameBlur = () => {
    setIsFirstNameTouched(true);
  };

  const handleLastNameBlur = () => {
    setIsLastNameTouched(true);
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
  };

  const handleCompanyBlur = () => {
    setIsCompanyTouched(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);
  
    const firstNameInput = document.getElementById("firstname-887308a6-b324-46ab-801b-1faa040fea36");
    const lastNameInput = document.getElementById("lastname-887308a6-b324-46ab-801b-1faa040fea36");
    const countrySelector = document.getElementById("country_selector-887308a6-b324-46ab-801b-1faa040fea36");
    const emailSelector = document.getElementById("email-887308a6-b324-46ab-801b-1faa040fea36");
    const companySelector = document.getElementById("company-887308a6-b324-46ab-801b-1faa040fea36");
  
    if (
      firstNameInput.value.trim() === "" &&
      lastNameInput.value.trim() === "" &&
      countrySelector.value.trim() === "" &&
      emailSelector.value.trim() === "" &&
      companySelector.value.trim() === ""
    ) {
      const errorLabels = document.getElementsByClassName("hs-error-msg");
  
      for (let i = 0; i < errorLabels.length; i++) {
        errorLabels[i].innerText = "Required";
      }
    } 
  };

const handleFirstNameChange = () => {
  const firstNameInput = document.getElementById("firstname-887308a6-b324-46ab-801b-1faa040fea36");
  const errorLabel = document.querySelector(".hs_firstname .hs-error-msg");

  if (errorLabel) { 
    if (firstNameInput.value.trim() === "") {
      errorLabel.style.display = "block"; 
    } else {
      errorLabel.style.display = "none"; 
    }
  }
};

const handleLastNameChange = () => {
  const lastNameInput = document.getElementById("lastname-887308a6-b324-46ab-801b-1faa040fea36");
  const errorLabel = document.querySelector(".hs_lastname .hs-error-msg");

  if (errorLabel) { 
    if (lastNameInput.value.trim() === "") {
      errorLabel.style.display = "block"; 
    } else {
      errorLabel.style.display = "none"; 
    }
  }
}

const handleCompanyChange = () => {
  const companyInput = document.getElementById("company-887308a6-b324-46ab-801b-1faa040fea36");
  const errorLabel = document.querySelector(".hs_company .hs-error-msg");

  if (errorLabel) { 
    if (companyInput.value.trim() === "") {
      errorLabel.style.display = "block"; 
    } else {
      errorLabel.style.display = "none"; 
    }
  }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const handleEmailChange = () => {
  const emailInput = document.getElementById("email-887308a6-b324-46ab-801b-1faa040fea36");
  const errorLabel = document.querySelector(".hs_email .hs-error-msg");

  if (errorLabel) { 
    if (emailInput.value.trim() === "") {
      errorLabel.innerText = "Please complete this required field."; 
      errorLabel.style.display = "block";
    } else if (!validateEmail(emailInput.value)) {
      errorLabel.innerText = "Email must be formatted correctly."; 
      errorLabel.style.display = "block";
    } else {
      errorLabel.style.display = "none"; 
    }
  }
};

const handleCountrySelectorChange = () => {
  const countrySelector = document.getElementById("country_selector-887308a6-b324-46ab-801b-1faa040fea36");
  const errorLabel = document.querySelector(".hs_country_selector .hs-error-msg");

  if (errorLabel) {
    if (!countrySelector.value || countrySelector.value === "Country") {
      errorLabel.style.display = "block";
    } else {
      errorLabel.style.display = "none";
    }
  }
};



  return (
    <div className="modal fixed inset-0 top-0 z-50 text-brand-black bg-brand-blue">
      <div className="container-tuum-padded-x relative">
        {/* CLOSE BUTTON */}
        <button
          aria-label="close"
          class="modal__button group absolute z-50 focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-brand-black/50 right-[20px] sm:right-[70px] md:right-[102px] lg:right-[108px] xl:right-[172px] lg:top-[52px] bg-contain !bg-center"
          type="button"
          tabindex="0"
          style={{ backgroundImage: "url('https://tuum.com/wp-content/themes/tuum-new/assets/img/icon--close.svg')" }}>
        </button>
        <div className="grid grid-cols-1 mt-[6%] tall:mt-[3%] tall-md:mt-[6%] tall:pb-[3%] pb-[6%] lg:[grid-template-columns:35%_65%] sm:px-10 md:px-16 lg:px-10 xl:px-20">
          <aside>
            <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0">
              <div>
                <p className="text-xl md:font-reckless-neue md:text-4xl">
                  Media enquiries:
                </p>
                <a class="underline-link text-lg after:bottom-0.5 after:w-full after:bg-brand-black hover:after:w-0 hover:after:bg-transparent focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-black/50" href="mailto:press@tuum.com">press@tuum.com</a>
              </div>
              <div>
                <p className="text-xl md:font-reckless-neue md:text-4xl">
                  Career questions:
                </p>
                <a class="underline-link text-lg after:bottom-0.5 after:w-full after:bg-brand-black hover:after:w-0 hover:after:bg-transparent focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-black/50" href="mailto:careers@tuum.com">careers@tuum.com</a>
              </div>
            </div>
          </aside>
          <div className="bg-white tall:py-6 tall-md:py-8 py-8 px-8 lg:px-10 xl:px-16 rounded-[40px]">
            <div className="hbspt-wrap">
              <div className="hbspt-form">
                <form onSubmit={handleFormSubmit}>
                  <fieldset className="form-columns-0">
                    <div className="hs-richtext hs-main-font-element">
                      <h1>Contact us</h1>
                    </div>
                  </fieldset>
                  {/* FIRST FIELDSET */}
                  <fieldset className="form-columns-2">
                    {/* FIRSTNAME INPUT */}
                    <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
                      <label
                        id="label-firstname-887308a6-b324-46ab-801b-1faa040fea36"
                        placeholder="Enter your First name"
                        htmlFor="firstname-887308a6-b324-46ab-801b-1faa040fea36"
                      >
                        <span>First name</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <input
                          id="firstname-887308a6-b324-46ab-801b-1faa040fea36"
                          name="firstname"
                          required=""
                          placeholder="First name"
                          type="text"
                          className="hs-input"
                          inputMode="text"
                          autoComplete="given-name"
                          onBlur={handleFirstNameBlur}
                          onChange={handleFirstNameChange} 
                        />
                      </div>
                      <ul
                        className="no-list hs-error-msgs inputs-list"
                        role="alert"
                        style={{
                          display:
                            isFirstNameTouched || isSubmitClicked
                              ? "block"
                              : "none",
                        }}
                      >
                        <li>
                          <label className="hs-error-msg hs-main-font-element">
                            Please complete this required field.
                          </label>
                        </li>
                      </ul>
                    </div>
                    {/* LASTNAME INPUT */}
                    <div className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field">
                      <label
                        id="label-lastname-887308a6-b324-46ab-801b-1faa040fea36"
                        placeholder="Enter your Last name"
                        htmlFor="lastname-887308a6-b324-46ab-801b-1faa040fea36"
                      >
                        <span>Last name</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <input
                          id="lastname-887308a6-b324-46ab-801b-1faa040fea36"
                          name="lastname"
                          required=""
                          placeholder="Last name"
                          type="text"
                          className="hs-input invalid error"
                          inputMode="text"
                          autoComplete="family-name"
                          onBlur={handleLastNameBlur}
                          onChange={handleLastNameChange} 
                        />
                      </div>
                      <ul
                        className="no-list hs-error-msgs inputs-list"
                        role="alert"
                        style={{
                          display:
                            isLastNameTouched || isSubmitClicked
                              ? "block"
                              : "none",
                        }}
                      >
                        <li>
                          <label className="hs-error-msg hs-main-font-element">
                            Please complete this required field.
                          </label>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                  {/* SECOND FIELDSET */}
                  <fieldset className="form-columns-2">
                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
                      <label
                        id="label-email-887308a6-b324-46ab-801b-1faa040fea36"
                        className=""
                        placeholder="Enter your Email"
                        htmlFor="email-887308a6-b324-46ab-801b-1faa040fea36"
                      >
                        <span>Email</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <input
                          id="email-887308a6-b324-46ab-801b-1faa040fea36"
                          name="email"
                          required=""
                          placeholder="Email"
                          type="email"
                          className="hs-input invalid error"
                          inputMode="email"
                          autoComplete="email"
                          onBlur={handleEmailBlur}
                          onChange={handleEmailChange}
                        />
                      </div>
                      <ul
                        className="no-list hs-error-msgs inputs-list"
                        role="alert"
                        style={{
                          display:
                            isEmailTouched || isSubmitClicked
                              ? "block"
                              : "none",
                        }}
                      >
                        <li>
                          <label className="hs-error-msg hs-main-font-element">
                            Please complete this required field.
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="hs_jobtitle hs-jobtitle hs-fieldtype-text field hs-form-field">
                      <label
                        id="label-jobtitle-887308a6-b324-46ab-801b-1faa040fea36"
                        className=""
                        placeholder="Enter your Job Title"
                        htmlFor="jobtitle-887308a6-b324-46ab-801b-1faa040fea36"
                      >
                        <span>Job Title</span>
                      </label>
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <input
                          id="jobtitle-887308a6-b324-46ab-801b-1faa040fea36"
                          name="jobtitle"
                          placeholder="Job Title"
                          type="text"
                          className="hs-input"
                          inputMode="text"
                          autoComplete="organization-title"
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="form-columns-2">
                    <div className="hs_country_selector hs-country_selector hs-fieldtype-select field hs-form-field">
                      <label
                        id="label-country_selector-887308a6-b324-46ab-801b-1faa040fea36"
                        placeholder="Enter your Country"
                        htmlFor="country_selector-887308a6-b324-46ab-801b-1faa040fea36"
                      >
                        <span>Country</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <select
                          id="country_selector-887308a6-b324-46ab-801b-1faa040fea36"
                          required=""
                          className="hs-input invalid error is-placeholder"
                          name="country_selector"
                          onBlur={handleCountrySelectorBlur}
                          onChange={handleCountrySelectorChange}
                        >
                          <option disabled="" value="">
                            Country
                          </option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Åland Islands">Åland Islands</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Asia/Pacific Region">
                            Asia/Pacific Region
                          </option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">
                            British Indian Ocean Territory
                          </option>
                          <option value="British Virgin Islands">
                            British Virgin Islands
                          </option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Caribbean Netherlands">
                            Caribbean Netherlands
                          </option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">
                            Christmas Island
                          </option>
                          <option value="Cocos (Keeling) Islands">
                            Cocos (Keeling) Islands
                          </option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Curaçao">Curaçao</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Democratic Republic of the Congo">
                            Democratic Republic of the Congo
                          </option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Europe">Europe</option>
                          <option value="Falkland Islands">
                            Falkland Islands
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">
                            French Polynesia
                          </option>
                          <option value="French Southern and Antarctic Lands">
                            French Southern and Antarctic Lands
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guernsey">Guernsey</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Heard Island and McDonald Islands">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jersey">Jersey</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Kosovo">Kosovo</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macau">Macau</option>
                          <option value="Macedonia (FYROM)">
                            Macedonia (FYROM)
                          </option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia">Micronesia</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montenegro">Montenegro</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar (Burma)">
                            Myanmar (Burma)
                          </option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">
                            Netherlands Antilles
                          </option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="North Korea">North Korea</option>
                          <option value="Northern Mariana Islands">
                            Northern Mariana Islands
                          </option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Palestine">Palestine</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn Islands">
                            Pitcairn Islands
                          </option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Réunion">Réunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Barthélemy">
                            Saint Barthélemy
                          </option>
                          <option value="Saint Helena">Saint Helena</option>
                          <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                          </option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Martin">Saint Martin</option>
                          <option value="Saint Pierre and Miquelon">
                            Saint Pierre and Miquelon
                          </option>
                          <option value="Saint Vincent and the Grenadines">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">
                            Sao Tome and Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Sint Maarten">Sint Maarten</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia and the South Sandwich Islands">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="South Korea">South Korea</option>
                          <option value="South Sudan">South Sudan</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard and Jan Mayen">
                            Svalbard and Jan Mayen
                          </option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks and Caicos Islands">
                            Turks and Caicos Islands
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="U.S. Virgin Islands">
                            U.S. Virgin Islands
                          </option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">
                            United States Minor Outlying Islands
                          </option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City">Vatican City</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Wallis and Futuna">
                            Wallis and Futuna
                          </option>
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>
                      <ul
                        className="no-list hs-error-msgs inputs-list"
                        role="alert"
                        style={{
                          display:
                            isCountrySelectorTouched || isSubmitClicked
                              ? "block"
                              : "none",
                        }}
                      >
                        <li>
                          <label className="hs-error-msg hs-main-font-element">
                            Please complete this required field.
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="hs_company hs-company hs-fieldtype-text field hs-form-field">
                      <label
                        id="label-company-887308a6-b324-46ab-801b-1faa040fea36"
                        className=""
                        placeholder="Enter your Company name"
                        htmlFor="company-887308a6-b324-46ab-801b-1faa040fea36"
                      >
                        <span>Company name</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <input
                          id="company-887308a6-b324-46ab-801b-1faa040fea36"
                          name="company"
                          required=""
                          placeholder="Company name"
                          type="text"
                          className="hs-input invalid error"
                          inputMode="text"
                          autoComplete="organization"
                          onBlur={handleCompanyBlur}
                          onChange={handleCompanyChange}
                        />
                      </div>
                      <ul
                        className="no-list hs-error-msgs inputs-list"
                        role="alert"
                        style={{
                          display:
                            isCompanyTouched || isSubmitClicked
                              ? "block"
                              : "none",
                        }}
                      >
                        <li>
                          <label className="hs-error-msg hs-main-font-element">
                            Please complete this required field.
                          </label>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                  <fieldset className="form-columns-1">
                    <div className="hs_inquiry hs-inquiry hs-fieldtype-textarea field hs-form-field">
                      <label
                        id="label-inquiry-887308a6-b324-46ab-801b-1faa040fea36"
                        className=""
                        placeholder="Enter your What would you like to talk about?"
                        htmlFor="inquiry-887308a6-b324-46ab-801b-1faa040fea36"
                      >
                        <span>What would you like to talk about?</span>
                      </label>
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <textarea
                          id="inquiry-887308a6-b324-46ab-801b-1faa040fea36"
                          className="hs-input hs-fieldtype-textarea"
                          name="inquiry"
                          placeholder="What would you like to talk about?"
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-columns-1">
                    <div className="hs_accept_submit hs-accept_submit hs-fieldtype-booleancheckbox field hs-form-field">
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <ul className="inputs-list" required="">
                          <li className="hs-form-booleancheckbox">
                            <label
                              htmlFor="accept_submit-887308a6-b324-46ab-801b-1faa040fea36"
                              className="hs-form-booleancheckbox-display"
                            >
                              <input
                                id="accept_submit-887308a6-b324-46ab-801b-1faa040fea36"
                                className="hs-input"
                                type="checkbox"
                                name="accept_submit"
                                value="true"
                              />
                              <span>
                                By submitting this form I accept{" "}
                                <a
                                  href="https://tuumplatform.com/privacy-policy/"
                                  target="_blank"
                                  rel="noopener"
                                >
                                  privacy policy
                                </a>{" "}
                                and{" "}
                                <a
                                  href="https://tuumplatform.com/cookie-policy/"
                                  target="_blank"
                                  rel="noopener"
                                >
                                  cookie policy
                                </a>
                                .&nbsp;
                                <span className="hs-form-required">*</span>
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-columns-1">
                    <div className="hs_accept_submit hs-accept_submit hs-fieldtype-booleancheckbox field hs-form-field">
                      <legend
                        className="hs-field-desc"
                        style={{ display: "none" }}
                      ></legend>
                      <div className="input">
                        <ul className="inputs-list">
                          <li className="hs-form-booleancheckbox">
                            <label
                              htmlFor="accept_newsletter-887308a6-b324-46ab-801b-1faa040fea36"
                              className="hs-form-booleancheckbox-display"
                            >
                              <input
                                id="accept_submit-887308a6-b324-46ab-801b-1faa040fea36"
                                className="hs-input"
                                type="checkbox"
                                name="accept_submit"
                                value="true"
                              />
                              <span>
                                I would like to receive your newsletter.
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </fieldset>
                  <div className="hs_submit hs-submit">
                    <div
                      className="hs-field-desc"
                      style={{ display: "none" }}
                    ></div>
                    <div className="actions">
                      <input
                        type="submit"
                        className="hs-button primary large"
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
