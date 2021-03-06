import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import styled from 'styled-components';

class ProfileAbout extends Component {
	render() {
		const { profile } = this.props;

		if (!profile.user) {
			return;
		}

		//Get first name
		const firstName = profile.user.name;

		//Skill List
		const skills = profile.skills.map((skill, index) => (
			<div key={index} className="p-3">
				<i className="fa fa-check" /> {skill}
			</div>
		));
		return (
			<div class="row">
				<div class="col-md-12">
					<div class="card card-body bg-light mb-3">
						<h3 class="text-center text-black">{firstName}'s Bio</h3>
						<p class="lead">
							{isEmpty(profile.bio) ? (
								<span>{firstName} does not have a bio</span>
							) : (
								<span>{profile.bio}</span>
							)}
						</p>
						<hr />
						<h3 class="text-center text-black">Hobbies and Interests</h3>
						<div class="row">
							<div class="d-flex flex-wrap justify-content-center align-items-center">{skills}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileAbout;
