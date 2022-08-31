import React, { useEffect, useState } from "react";
import "./summary.css";
import Resume from "../../data/Naveen Satanarachchi.pdf";

function Summary() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/users/naveensatan`).then((response) =>
			response
				.json()
				.then(setData)
				.then(() => setLoading(false))
				.catch(() => setError)
		);
	}, []);

	if (loading) {
		return (
			<div id="summary" className="summary-container">
				<p className="bio">loading....</p>
			</div>
		);
	}

	if (data) {
		return (
			<div id="summary" className="summary-container">
				<div className="headshot-container">
					<img
						className="headshot"
						src={data.avatar_url}
						alt="headshot of author"
					/>
				</div>
				<div className="bio-container">
					<h3 className="bio-salutation"> Hi there... I'm</h3>
					<h2 className="bio-header">{data.name}</h2>
					<p className="bio">{data.bio}</p>
					<div className="bio-footer">
						<a className="bio-resume-btn btn" href={Resume} target="-blank">
							Resumé
						</a>
						<div className="bio-social">
							<a href={data.html_url} target="-blank">
								<i className="fa-brands fa-github bio-social-i btn"></i>
							</a>
							<a href={data.blog} target="-blank">
								<i className="fa-brands fa-linkedin bio-social-i btn"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return <pre>{JSON.stringify(error)}</pre>;
	}
}

export default Summary;
