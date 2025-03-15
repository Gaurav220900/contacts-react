import { Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
    const location = useLocation();
    const { contact } = location.state;
    console.log(contact);
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
            <div style={{width: '250px', padding:'10px', borderRadius: '5px', textAlign:'center', border: '1px solid black'}}>
            <img alt="user" style={{width:200, height: 200}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAMFBMVEXk5ueutLeor7Le4OHn6eqrsbXq7O3S1dfh4+TGysyzuLu8wcO2u77V2NrY29y/w8bDtmeAAAAD/0lEQVR4nO2c23LjIAxADQgwF+P//9vFadIm3cQBhCUy9XnqtC9nNLK4SHSaTk5OTk5OTk5OTk5OTk5OEIAxk1oySU3GALfOHjDNi4vyh+iWeRpUGZRdhdTiDi2lX+08oLBRzosH15uyjm444XmVz1xvxm6klIDZ6teyG1LYYYRNivuylwgHNYYv2LeuF19hh/B170N7zQjHrZoJpbabL3d8ocI2JwSz71xlm+O7cvrCWmfLmw/GyUrbnA9s9QFSbWwvJCZfFVtsdeCxheKC+whT+qb6xL36zgy25ul2sYhAH15YWoObWeh9m76zLzT55gFscypsJGrf6vXsHvLioDCxzelArNuw/D6El3YphoLjzi7BUOpOuOBmSG0tWpey9JoVaysoa4PxWFtNeqxAB1dEwn1Owut6RWZbeBGyD92hAlwHXbrS0EOX8IjZR5fK9m9G98N0qWz/YnQpC9lnLRMftghPM143Eup+2AbSBHR0KbfngD/80B6FP+toCdjkjbQHd+S1CHWHAll5JfWNKepKj7wd+GkXpqjr6EDenUCVXoZWICBaKeSymF6KZJkbaW8D0i4RN13VtLRpytuxB9+2r42hqfbFZw0I1I62bPCOi8yVLRW9MspW+zIsZ49ATctKruyThTAX78148/abwvpA32d/jll8wchm5BoZ+g9Q7s1ArBZjjRyruDNuLOQo07DfmBTE0xDnXwbFsqnZBSC58GtUXmgpghstslcA5rQN9//gV5tmGNP2Ckxqsc45m9TYohcAwFzJPw7rC5fXMynZLbJXrN2e0sBob2lyEJV1wfv7cnDD+7haNcZbmvx1qWSdz5/V3jqR/5wrxKImzuwAMy9ujXrX9K6maR+c5fr+AGzwz1eG18pa+Ggn6kUDpjmtsvGeIZdjqwhTGaaUsxU1VCjInoWBWULBhvENWkSKV1Yw2fa7sd/K7uDyBrP16CbKna8+dPsDNtZVgvfC/rBtO9ReKhRij6jE2wHnCNlcJmL/WzNYYsekfSQf5Pp+ctBl4GJHOPb85CB1K16vfGXH0Zx+pfY10nW6PjNHfWOPdLpVh3DYN/aLHi2W2ueJKNAV7aCl4RXYTgB+71WFxMQXJtrYZjTmnhI1BdCGb27Gt7Ylkb6N9azDOFMLOjalAyiO2IrmURLyz+yblvLAkrgXdEP6tr2w7uRbnQ74oUwMsvIAx1QVvqmtDqzBFZWbhy7T2hjqet2ku8bnvkuF7sJtWzf4wLC1+c+3PBtm3rJwofwlMXcVu1J6x24Q05gdKX6pwC36RWk2LNyiF0pfVhx8H1ZM4UpR/6+EjqH0mQ3+yUkXfNmhuO2/8xxA2bem7gcoOCksDWoQmAcQTwbnH3sjN9EqhnCNAAAAAElFTkSuQmCC' />
           
            <div><h2>Name: {contact.name}</h2></div>
            <div>Email: {contact.email}</div>
            
            </div>
            <div style={{marginTop: '10px'}}>
                <Link to='/'>
                <Button className="ui button blue">Back to Contact List</Button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;