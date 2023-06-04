import {mount} from "@vue/test-utils";
import ContentComponent from '../../../src/components/ContentComponent.vue'
import axios from "axios";

const selectors= {
    likeButton: ".give-like"
}

function getMountedWrapper(props= {},  data = {}) {
    return mount(ContentComponent, {
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
describe('Likes', () => {
    test("on trigger like button", async () => {
        const spyOnGiveLike = jest.spyOn(axios, 'put').mockImplementation(() => Promise.resolve({
            status: 201
        }))
        const wrapper = getMountedWrapper({modeType: false}, {likes: 10})
        const likeButton = wrapper.find(selectors.likeButton)
        await likeButton.trigger('click')
        await wrapper.vm.$nextTick()
        expect(spyOnGiveLike).toBeCalledTimes(1)
        expect(wrapper.vm.likes).toBe(11)
    })
})