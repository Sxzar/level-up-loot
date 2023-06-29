import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
	"https://gmail.us21.list-manage.com/subscribe/post?u=6be3ccd7bc125870c5180d45a&amp;id=03f679fcc9&amp;f_id=00d55ee1f0";

const SubscriptionForm = () => {
	<MailchimpSubscribe url={url} />;
};

export default SubscriptionForm;
