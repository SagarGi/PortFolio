import {mount} from "@vue/test-utils";
import ContactFrom from '../../../src/components/utilsComponents/ContactForm'
import HomePage from "../../../src/HomePage.vue";
import * as utils from ''

const selectors= {
    sendMessageButton: "#submit",
    validationError: ".validation-error",
    popUpModal: "#popup"
}

function getMountedWrapper(props= {},  data = {}) {
    return mount(ContactFrom, {
        propsData: {
            ...props
        },
        data() {
            return {
                ...data
            }
        }
    });
}

describe("Contact/Message Me Form", () => {
    const homePageWrapper = mount(HomePage, {
        propsData: {
            showModal: true
        }
    })
        describe("on trigger send message", () => {
            let homePageWrapper
            let wrapper
            let sendMessageButton
            beforeEach(() => {
                homePageWrapper = mount(HomePage, {
                    propsData: {
                        showModal: true
                    }
                })
                wrapper = getMountedWrapper({modeType: "false"}, {
                    username: "",
                    emailAddress: "",
                    message: "",
                    inputError: {
                        username: "",
                        emailAddress: "",
                        message: "",
                    },
                    formSuccessMessage: "",
                })
                sendMessageButton = wrapper.find(selectors.sendMessageButton)
                expect(sendMessageButton.text()).toBe("Send Message")
                expect(wrapper.find(selectors.popUpModal).isVisible()).toBe(true)
            })
            it('should show "Fields cannot be empty !!" on empty username', async function () {
                await wrapper.setData({
                    username: ''
                })
                await sendMessageButton.trigger('click')
                expect(wrapper.vm.inputError.username).toBe("Fields cannot be empty !!")
            });

            it('should show "Fields cannot be empty !!" on empty email', async function () {
                await wrapper.setData({
                    username: 'testUser',
                    emailAddress: ''
                })
                await sendMessageButton.trigger('click')
                expect(wrapper.vm.inputError.emailAddress).toBe("Fields cannot be empty !!")
            });

            it('should show "Fields cannot be empty !!" on empty message', async function () {
                await wrapper.setData({
                    username: 'testUser',
                    emailAddress: 'testuser@example.com',
                    message: ''
                })
                await sendMessageButton.trigger('click')
                expect(wrapper.vm.inputError.message).toBe("Fields cannot be empty !!")
            });

            it('should show "Your email address is invalid !!" on invalid email address', async function () {
                await wrapper.setData({
                    username: 'testUser',
                    emailAddress: 'invalid_email_example.com',
                    message: 'This is message to the portfolio owner.'
                })
                await sendMessageButton.trigger('click')
                expect(wrapper.vm.inputError.emailAddress).toBe("Your email address is invalid !!")
            });

            it('should show "Thank you, your email has been sent !!!" on all valid inputs', async function () {
                await wrapper.setData({
                    username: 'testUser',
                    emailAddress: 'validemail@example.com',
                    message: 'This is message to the portfolio owner.'
                })
                const spyOnIsEmailSent = jest.spyOn(wrapper.vm, 'isEmailSent').mockReturnValue(true)
                await sendMessageButton.trigger('click')
                expect(spyOnIsEmailSent).toBeCalledTimes(1)
                expect(wrapper.vm.formSuccessMessage).toBe("Thank you, your email has been sent !!!")
            });

            it('should reset all inputs on all valid inputs', async function () {
                await wrapper.setData({
                    username: 'testUser',
                    emailAddress: 'validemail@example.com',
                    message: 'This is message to the portfolio owner.'
                })
                const spyOnIsEmailSent = jest.spyOn(wrapper.vm, 'isEmailSent').mockReturnValue(true)
                await sendMessageButton.trigger('click')
                expect(spyOnIsEmailSent).toBeCalledTimes(1)
                expect(wrapper.vm.username).toBe("")
                expect(wrapper.vm.emailAddress).toBe("")
                expect(wrapper.vm.message).toBe("")
            });
        })
})