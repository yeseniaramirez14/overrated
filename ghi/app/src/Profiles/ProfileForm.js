import React from "react";
import './profile.css';
import { useParams } from "react-router-dom";

// need to fix the height scale
// Fix the input box. imo they're too big

function GrabId(){
    const params = useParams();
    const profile_id = params.id;
    return <ProfileForm profile_id = {profile_id}></ProfileForm>
  }

class ProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photo: "",
            about: "",
            height_ft: 0,
            height_in: 0,
            job: "",
            education: "",
            gender: "",
            sexual_orientation: "",
            religion: "",
            pronouns: "",
            interested: [],
            ethnicity: "",
            location: "",
        };
        
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.handleHeightFtChange = this.handleHeightFtChange.bind(this);
        this.handleHeightInChange = this.handleHeightInChange.bind(this);
        this.handleJobChange = this.handleJobChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSexual_orientationChange = this.handleSexual_orientationChange.bind(this);
        this.handleReligionChange = this.handleReligionChange.bind(this);
        this.handlePronounsChange = this.handlePronounsChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
        this.handleInterestedChange = this.handleInterestedChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    async getMyDetails() {
        const url = `${process.env.REACT_APP_API_HOST}/api/profiles/mine`;
        const response = await fetch(url, {
        credentials: 'include',
        });
        
        if (response.ok) {
        this.setState({
            profile: await response.json(),
        });
        }else if (response.status === 401){
        this.setState({redirect: true})
        }
    }


  componentDidMount() {
    this.getMyDetails();
  }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        console.log("we're sending this data to the post", data);
        data.height = data.height_ft*12 + data.height_in
        delete data.height_ft;
        delete data.height_in;

        const url = `${process.env.REACT_APP_API_HOST}/api/profiles/myself`;
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        };
    
        const response = await fetch(url, fetchConfig,);
        if(response.ok){
            const userform = await response.json();
            console.log(userform);
            this.setState({
                photo: "",
                about: "",
                height_ft: 0,
                height_in: 0,
                job: "",
                education: "",
                gender: "",
                sexual_orientation: "",
                religion: "",
                pronouns: "",
                interested: [],
                ethnicity: "",
                location: "",
            });
        } else if (!response.ok){
            const message = `An error: ${response.status} - ${response.statusText}`;
            throw new Error(message);
        } else{
        console.log("Not Good");
    }
    }
    handlePhotoChange(event) {
        const value = event.target.value;
        this.setState({ photo: value });
    }
    handleAboutChange(event) {
        const value = event.target.value;
        this.setState({ about: value });
    }
    handleHeightFtChange(event) {
        const value = event.target.value;
        this.setState({ height_ft: parseInt(value) });
    }
    handleHeightInChange(event) {
        const value = event.target.value;
        this.setState({ height_in: parseInt(value)});
    }
    handleJobChange(event) {
        const value = event.target.value;
        this.setState({ job: value });
    }
    handleEducationChange(event) {
        const value = event.target.value;
        this.setState({ education: value });
    }
    handleGenderChange(event) {
        const value = event.target.value;
        this.setState({ gender: value });
    }
    handleSexual_orientationChange(event) {
        const value = event.target.value;
        this.setState({ sexual_orientation: value });
    }
    handleReligionChange(event) {
        const value = event.target.value;
        this.setState({ religion: value });
    }
    handlePronounsChange(event) {
        const value = event.target.value;
        this.setState({ pronouns: value });
    }
    handleLocationChange(event) {
        const value = event.target.value;
        this.setState({ location: value });
    }
    handleEthnicityChange(event) {
        const value = event.target.value;
        this.setState({ ethnicity: value });
    }
    handleInterestedChange(event) {
        const { value, checked } = event.target;
        // console.log("the event.target.name", event.target.name);
        // console.log("the value", value)
        // console.log("the checked", checked)

        let listed = this.state.interested;
        // console.log("listed:", listed)
        // console.log("in_array:", in_array);
        // console.log("is value checked?", `${value} is ${checked}`);

        if(checked) {
            listed.push(value);
            // console.log("This is listed", listed);
        } else {      
            let index = listed.indexOf(value)

            if (index > -1 ){
                listed.splice(index, 1);
            }
        }
        this.setState({
            interested: [ ...listed],
        });
        // console.log("this is the state", this.state.interested)
    }

    render(){
        return (
            <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Edit Your Information</h1>
                    <hr/>
                    <br></br>
                    <form onSubmit={this.handleSubmit} id="create-form">

{/* ------------------------Photos */}

                    <label htmlFor="height">Photos:</label>
                    <div className="form-floating mb-3">
                        <input onChange={this.handlePhotoChange} value={this.state.photo} 
                            type="file"  id="photo" multiple="" />

                        <button onSubmit={this.handleSubmit} className="btn btn-primary" 
                            value="Submit" form="create-form" type="submit">Upload</button>
                    </div>
                    </form>
{/* ------------------------About */}

                    <form onSubmit={this.handleSubmit} >
                    <label htmlFor="about">About Me:</label>
                    <div className="form-floating mb-3">
                        <text onChange={this.handleAboutChange} type="textarea" name="textValue" 
                            value={this.state.about} className="form-control" />
                    </div>
{/* ------------------------Height */}

                    <label htmlFor="height">Height:</label>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleHeightFtChange} type="number" placeholder="Feet" name="height_ft" min="1" max="8" value={this.state.height_ft} className="form-control"/>
                        <label htmlFor="feet">Feet</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleHeightInChange} type="number" placeholder="Inches" name="height_in" min="1" max="12" value ={this.state.height_in} className="form-control"/>
                        <label htmlFor="inches">Inches</label>
                    </div>
{/* ------------------------Job */}

                    <label htmlFor="job">Job Title:</label>
                    <div className="form-floating mb-3" id="form_input">
                        <input onChange={this.handleJobChange} value={this.state.job} 
                            placeholder="Job" type="text" name="job" 
                            id="job" className="form-control" />
                    </div>
 {/* ------------------------Education */}

                    <label htmlFor="education">Education:</label>
                    <div className="form-floating mb-3" id="form_input">
                        <input onChange={this.handleEducationChange} value={this.state.education} 
                            placeholder="Education" type="text" name="education" 
                            id="education" className="form-control" />
                    </div>
{/* ------------------------Location */}

                    <label htmlFor="location">Living In:</label>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleLocationChange} value={this.state.location} 
                            placeholder="Location" type="text" name="location" 
                            id="location" className="form-control" />
                        </div>
 {/* --------------------Religion */}

                    <label htmlFor="religion">Religion:</label>
                    <div onChange={this.handleReligionChange} value={this.state.religion}>
                        <input type="radio" value="Christian" name="religion" />&nbsp; Christian &nbsp;&nbsp;
                        <input type="radio" value="Judaism" name="religion" />&nbsp; Judaism &nbsp;&nbsp;
                        <input type="radio" value="Islam" name="religion" />&nbsp; Islam &nbsp;&nbsp;

                        <input type="radio" value="Hinduism" name="religion" />&nbsp; Hinduism &nbsp;&nbsp;<br></br>
                        <input type="radio" value="Buddhism" name="religion" />&nbsp; Buddhism &nbsp;&nbsp;

                        <input type="radio" value="Pagan" name="religion" />&nbsp; Pagan &nbsp;&nbsp;
                        <input type="radio" value="Agnostic" name="religion" />&nbsp; Agnostic &nbsp;&nbsp;
                        <input type="radio" value="Atheist" name="religion" />&nbsp; Atheist &nbsp;&nbsp;
                    </div>                    
{/* --------------------Gender */}

                    <label htmlFor="gender">Gender:</label>
                    <div onChange={this.handleGenderChange}  value={this.state.gender} >
                        <img src="/images/Male.png" alt="gender" width="60" height="80"></img>
                        <input type="radio" value="male" name="gender" />&nbsp; Male

                        <img src="/images/Female.png" alt="gender" width="60" height="80"></img>
                        <input type="radio" value="female" name="gender" />&nbsp; Female

                        <img src="/images/Intersex.png" alt="gender" width="60" height="80"></img>
                        <input type="radio" value="other" name="gender" />&nbsp; Other
                    </div>
{/* ------------------------Interested */}

                    <label htmlFor="interested">Interested In:</label>
                    <div className="form-check m-3" onChange={this.handleInterestedChange} >
                        <input type="checkbox" id={this.state.interested==="male"}
                            value="male" name="interestedinmen" />&nbsp;Men &nbsp;&nbsp;&nbsp;

                        <input type="checkbox" id={this.state.interested==="female"}
                            value="female"  name="interestedinwomen" />&nbsp;Women &nbsp;&nbsp;
                        <input type="checkbox" id={this.state.interested==="other"}
                            value="other" name="interestedineveryone" />&nbsp;Everyone! &nbsp;&nbsp;
                    </div>
{/* ------------------------Sexual */}

                    <label htmlFor="sexual_orientation">Sexual Orientation:</label>
                    <div className="form-floating mb-3">
                        <select onChange={this.handleSexual_orientationChange} value={this.state.sexual_orientation}>
                            <option value=''>--Select Sexual Orientation--</option>
                            <option value="straight">Straight</option>
                            <option value="gay">Gay</option>
                            <option value="lesbian">Lesbian</option>

                            <option value="pan_sexual">Pan-Sexual</option>
                            <option value="demi_sexual">Demi-Sexual</option>
                            <option value="a_sexual">A-Sexual</option>
                        </select>
                    </div>
{/* ------------------------Ethnicity */}

                    <label htmlFor="ethnicity">Ethnicity:</label>
                    <div className="form-floating mb-3" >
                        <select onChange={this.handleEthnicityChange} value={this.state.ethnicity}>
                            <option value=''>--Select Ethnicity--</option>
                            <option value="caucasian">Caucasian</option>
                            <option value="african_decent">African Decent</option>
                            <option value="native_american">Native American</option>

                            <option value="asian">Asian</option>
                            <option value="pacific_islander">Hawaiian or Pacific Islander</option>
                            <option value="mixed">Mixed</option>
                        </select>
                    </div>
{/* ------------------------Pronouns */}

                    <label htmlFor="pronouns">Pronouns:</label>
                    <div className="form-floating mb-3" >
                        <select value={this.state.pronouns} onChange={this.handlePronounsChange} >
                            <option value=''>--Select Pronouns--</option>
                            <option value="He/Him" >He/Him</option>
                            <option value="She/Her" >She/Her</option>

                            <option value="They/Them">They/Them</option>
                            <option value="Xe/Xem/Xir">Xe/Xem/Xir</option>
                        </select>    
                    </div>
                    <hr/>
                    <button className="btn btn-primary">
                    Apply Changes</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default GrabId;