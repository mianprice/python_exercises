import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Contact {
  constructor(n,p,e,t,f) {
    this.name = n;
    this.phone = p;
    this.email = e;
    this.type = t;
    this.fave = f;
  }
}

let contact_list = [];
contact_list.push(new Contact('Alice','555-555-5555','alice@fake.com','test',false));
contact_list.push(new Contact('Bob','555-555-5555','alice@fake.com','test',false));
contact_list.push(new Contact('Carol','555-555-5555','alice@fake.com','test',true));
contact_list.push(new Contact('Dan','555-555-5555','alice@fake.com','test',false));

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      contacts: props.contactList,
      current_contact: {
        name: undefined,
        phone: undefined,
        email: undefined,
        type: undefined
      }
    };
  }
  render() {
    return (
      <div className="app">
        <div className="add_contact">
          <div className="add_title"><div className="text_contain emph_text">Add New Contact</div></div>
          <div><div className="text_contain">Name</div></div><input className="form-control" type="text"/>
          <div><div className="text_contain">Phone</div></div><input className="form-control" type="text"/>
          <div><div className="text_contain">Email</div></div><input className="form-control" type="text"/>
          <div><div className="text_contain">Type</div></div><input className="form-control" type="text"/>
          // Family, Friend, Coworker, Other \\

        </div>
        <div className="contact_list">
          <div className="list_title"><div className="text_contain emph_text">Contacts</div></div>
          {this.state.contacts.map((element,idx) => (
            <div key={idx} className="contact">
              <div className="c_name"><div className="text_contain">{element.name}</div><div className="text_contain c_type">{element.type}</div></div>
              <div className="c_phone"><div className="text_contain"><i className="fa fa-fw fa-phone-square"></i>{element.phone}</div></div>
              <div className="c_email"><div className="text_contain"><i className="fa fa-fw fa-envelope"></i>{element.email}</div></div>
              <div className="controls"><div className="text_contain favorite"><i className={element.fave ? "fa fa-fw fa-star" : "fa fa-fw fa-star-o"}></i></div><div className="text_contain edit">Edit</div><div className="text_contain delete">Delete</div></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App contactList={contact_list}/>,
  document.getElementById('root')
);