import SampleForm from 'components/Forms/SampleForm';


export default {
    title: "my-components/Forms",
    component: SampleForm
}

const Template = (args) => <SampleForm {...args} />;


export const Sample_Form1 = Template.bind({
});
Sample_Form1.args = {
    formTitle: "Sample Forms"
}