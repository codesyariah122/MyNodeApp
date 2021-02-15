import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';


const Form = () => {

	const [postData, setPostData] = useState({
		creator: '', title: '', message: '', tags: '', selectedFile: '',
	});

	const classes = useStyles();

	const handleSubmit = () => {

	}

	return (
		<Paper className={classes.paper}>
			<Typography variant="h6">
				Creating a Memory
			</Typography>

			<TextField 
			name="creator" 
			variant="outlined" 
			label="Creator" 
			fullWidth
			value={postData.creator}
			onChange={(e) => setPostData({ creator: ...postData, e.target.value})}
			/>

			<Form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}

			</Form>
		</Paper>
	)
}

export default Form;