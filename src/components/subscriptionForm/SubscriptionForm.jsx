import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = process.env.REACT_APP_MAILCHIMP_URL;

const SubscriptionForm = () => {
	return (
		<div>
			<p>
				Unlock cheap games, free giveaways, and gaming news! Sign up now
				to stay ahead and never miss incredible deals, hidden gems, and
				industry updates. Join today!
			</p>
			<MailchimpSubscribe url={url} />
		</div>
	);
};

export default SubscriptionForm;
