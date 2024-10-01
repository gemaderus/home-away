import FormInput from "../../form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { SubmitButton } from "@/app/form/Buttons";
import { createProfileAction } from "@/utils/actions.ts";

const CreateProfilePage = () => {
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-8 capitalize">New user</h1>
			<div className="border p-8 rounded-md">
				<FormContainer action={createProfileAction}>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<FormInput name="firstName" type="text" label="First Name" />
						<FormInput name="lastName" type="text" label="Last Name" />
						<FormInput name="username" type="text" label="Username" />
					</div>
					<SubmitButton text="Create profile" className="mt-8" />
				</FormContainer>
			</div>
		</section>
	);
};

export default CreateProfilePage;