import React,{useState} from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function Contact() {
  const [formvalue,setFormvalue]=useState({
  "name":"",
  "email":"",
  "message":""})

  
  
    function changehandel(e){
      const {name,value}=e.target;
      setFormvalue({...formvalue,[name]:value})
      console.log(formvalue);
    }
  
    const submitHandel = async (e) => {
      e.preventDefault();
      const res=await axios.post(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Contact.json`,formvalue);
      if(res.data)
      {
          
          swal({
              title: "Success",
              text: "done",
              icon: "success",
              button: "Ok!",
            });
          setFormvalue({...formvalue,name:"",email:"",message:""})
          
          
      }
      else
      {
        swal({
          title: "error",
          text: "Not done",
          icon: "error",
          button: "Ok!",
        });
        setFormvalue({...formvalue,name:"",email:"",message:""})
      }
  }
  return (
    <div>
{/* Contact Section Begin */}
<section className="contact spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div className="contact__text">
          <div className="section-title">
            <span>Information</span>
            <h2>Contact Us</h2>
            <p>As you might expect of a company that began as a high-end interiors contractor, we pay
              strict attention.</p>
          </div>
          <ul>
            <li>
              <h4>America</h4>
              <p>195 E Parker Square Dr, Parker, CO 801 <br />+43 982-314-0958</p>
            </li>
            <li>
              <h4>France</h4>
              <p>109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="contact__form">
          <form action="#">
            <div className="row">
              <div className="col-lg-6">
                <input type="text" placeholder="Name" name="name" value={formvalue.name} onChange={changehandel} />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email" name="email" value={formvalue.email} onChange={changehandel}/>
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Message" defaultValue={""} name="message" value={formvalue.message} onChange={changehandel} >
                  {formvalue.message}
                </textarea>
                <button type="submit" className="site-btn" onClick={submitHandel}>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact Section End */}

</div>
  )
}

export default Contact