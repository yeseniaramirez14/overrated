import React from "react";
import './profile.css';

// need to fix the height scale
// Fix the input box. imo they're too big

class ProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photo: "",
            about: "",
            height: "",
            job: "",
            education: "",
            gender: "",
            sexual_orientation: "",
            religion: "",
            pronouns: "",
        };
        
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleJobChange = this.handleJobChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSexual_orientationChange = this.handleSexual_orientationChange.bind(this);
        this.handleReligionChange = this.handleReligionChange.bind(this);
        this.handlePronounsChange = this.handlePronounsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};

        const user_Form_Url = `${process.env.REACT_APP_API_HOST}//api/profiles/myself`;
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(user_Form_Url, fetchConfig);
        if(response.ok){
            const userform = await response.json();
            console.log(userform);
            this.setState({
                photo: "",
                about: "",
                height: "",
                job: "",
                education: "",
                gender: "",
                sexual_orientation: "",
                religion: "",
                pronouns: "",
            });
        }
    }


    handlePhotoChange(event) {
        const value = event.target.value;
        this.setState({ photo: value });
    }
    handleAboutChange(event) {
        const value = event.target.value;
        this.setState({ About: value });
    }
    handleHeightChange(event) {
        const value = event.target.value;
        this.setState({ Height: value });
    }
    handleJobChange(event) {
        const value = event.target.value;
        this.setState({ Job: value });
    }
    handleEducationChange(event) {
        const value = event.target.value;
        this.setState({ Education: value });
    }
    handleGenderChange(event) {
        const value = event.target.value;
        this.setState({ Gender: value });
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

    render(){
        return (
            <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Edit Your CatFish Information</h1>
                    <br></br>
                    <form onSubmit={this.handleSubmit} id="create-form">
                    <label htmlFor="height">Photos:</label>
                    <div className="form-floating mb-3">
                        <input onChange={this.handlePhotoChange} value={this.state.photo} 
                        placeholder="Photo" type="text" name="photo" 
                        id="photo" className="form-control" />

                    <button className="btn btn-primary" 
                    value="Submit" form="create-form" type="submit">Upload</button>
                    </div>
                    </form>

                    <form onSubmit={this.handleSubmit} id="create-form">
                    <label htmlFor="height">About Me:</label>
                    <div className="form-floating mb-3">

                        <input onChange={this.handleAboutChange} value={this.state.about} 
                        placeholder="About" type="textarea" name="textValue" 
                        id="about" className="form-control" />
                    </div>

                    <label htmlFor="height">Height:</label>
                    <div className="form-floating mb-3">

                        <input onChange={this.handleHeightChange} value={this.state.height} 
                        placeholder="Height" type="range" name="height" 
                        id="height" min="4'0" max="8'0" className="slider" />
                    </div>

                    <label htmlFor="job">Job:</label>
                    <div className="form-floating mb-3" id="form_input">
                        <input onChange={this.handleJobChange} value={this.state.job} 
                        placeholder="Job" type="text" name="job" 
                        id="job" className="form-control" />
                    </div>

                    <label htmlFor="education">Education:</label>
                    <div className="form-floating mb-3" id="form_input">
                
                        <input onChange={this.handleEducationChange} value={this.state.education} 
                        placeholder="Education" type="text" name="education" 
                        id="education" className="form-control" />
                    </div>

                    <label htmlFor="religion">Religion:</label>
                    <div className="form-floating mb-3" id="form_input">

                        <input onChange={this.handleReligionChange} value={this.state.religion} 
                        placeholder="Religion" type="text" name="religion" 
                        id="religion" className="form-control" />
                    </div>
                    

                    <label htmlFor="gender">Gender:</label>
                    <div className="form-floating mb-3">
                        <select>
                        <option value=''>--Select Gender--</option>
                        <option onChange={this.handleGenderChange} 
                        value={this.state.gender==="Male"}>Male</option>

                        <option onChange={this.handleGenderChange} 
                        value={this.state.gender==="Female"}>Female</option>

                        <option onChange={this.handleGenderChange} 
                        value={this.state.gender==="Other"}>Other</option>
                        </select>
                    </div>

                    <label htmlFor="sexual_orientation">Sexual Orientation:</label>
                    <div className="form-floating mb-3">
                    <select>
                        <option value=''>--Select Sexual Orientation--</option>
                        <option onChange={this.handleSexual_orientationChange} 
                        value={this.state.sexual_orientation==="Straight"}>Straight</option>

                        <option onChange={this.handleSexual_orientationChange} 
                        value={this.state.sexual_orientation==="Gay"}>Gay</option>

                        <option onChange={this.handleSexual_orientationChange} 
                        value={this.state.sexual_orientation==="Lesbian"}>Lesbian</option>

                        <option onChange={this.handleSexual_orientationChange} 
                        value={this.state.sexual_orientation==="Pan-Sexual"}>Pan-Sexual</option>

                        <option onChange={this.handleSexual_orientationChange} 
                        value={this.state.sexual_orientation==="Demi-Sexual"}>Demi-Sexual</option>

                        <option onChange={this.handleSexual_orientationChange} 
                        value={this.state.sexual_orientation==="A-Sexual"}>A-Sexual</option>
                    </select>
                    </div>

                    <label htmlFor="pronouns">Pronouns:</label>
                    <div className="form-floating mb-3">

                    <select>
                        <option value=''>--Select Pronouns--</option>
                        <option onChange={this.handlePronounsChange} 
                        value={this.state.pronouns==="He/Him"} >He/Him</option>

                        <option onChange={this.handlePronounsChange} 
                        value={this.state.pronouns==="She/Her"} >She/Her</option>

                        <option onChange={this.handlePronounsChange} 
                        value={this.state.pronouns==="They/Them"}>They/Them</option>

                        <option onChange={this.handlePronounsChange} 
                        value={this.state.pronouns==="Xe/Xem/Xir"}>Xe/Xem/Xir</option>
                        </select>    
                    </div>

                    <button className="btn btn-primary" value="Submit" form="create-form" type="submit">Edit</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default ProfileForm;