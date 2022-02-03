import React from 'react';
import  {Cardcontent}  from '../component/cardcontent.js';
// import { Cardcontent} from './Cardcontent';
const Card=()=>{
    return(
        
        <section className="pricing py- 5">
        <div className="container">
        <div className="row">
        
        <Cardcontent class1="text-muted" class2="text-muted" class3="text-muted" class4="text-muted"
        icon1="fa fa-times" icon2="fa fa-times" type="free" rate="0" users="single user"storage="5GB storage"
        Subdomains="free subdomain">
        </Cardcontent>


        <Cardcontent class4="text-muted" 
        icon1="fa fa-check" icon2="fa fa-times" type="PLUS" rate="9" users="5 user"storage="50GB storage"
        Subdomains="free subdomain">
        </Cardcontent>


        <Cardcontent class1="text-muted" class2="text-muted" class3="text-muted" class4="text-muted"
        icon1="fa fa-times" icon2="fa fa-times" type="free" rate="0" users="single user"storage="5GB storage"
        Subdomains="free subdomain">
        </Cardcontent>

        {/* e */}


      </div>
      </div>
      </section>
      



    )
}
export default Card;

