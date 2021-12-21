import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  formContainer:{
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },

}));

const EditCampusView = (props) => {
  const {handleChange, handleSubmit, campus } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Edit Campus
          </Typography>
        </div>
        <p>Campus current information:</p>
        <p>Name: {campus.name}, </p>
        <p>Address: {campus.address}, </p>
        <p>Description: {campus.description}, </p>
        <p>image Url: {campus.imageUrl}, </p>
        <p>Students: </p>
        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>
              <p>{student.id} {name}</p>
              <button>remove student</button></li> //I didnt have a chance to finish but this was going to start a function that sent a post request to the student id and just change the campus id to null.
          );
        })}
        </ul>
        <h1> What would you like to edit? </h1>

        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>

          <label style= {{color:'#11153e', fontWeight: 'bold'}}>name</label>
          <input type="text" name="name"  onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>imageUrl</label>
          <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>address</label>
          <input type="text" name="address"  onChange={(e) => handleChange(e)} />
          <br/>
          <br/>
          <label style={{color:'#11153e', fontWeight: 'bold'}}>description</label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>

        <h1> Add a student to the campus based on id</h1>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}> // Did not get to finish this but similiar to remove student this was just going to send a post request to student id and change campus id to this campus id
        <input type="number" step="1" min='0.0' name="studentid" onChange={(e) => handleChange(e)} />
        </form>
        </div>
      </div>

  )
}

export default EditCampusView;
