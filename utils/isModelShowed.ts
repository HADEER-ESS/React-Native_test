import { by, element, expect } from 'detox'


export const isModelShowed = async (modelId: string) => {

    //"model.categoryInteract.touchableOpacity"
    const myModel = element(by.id(`model.${modelId}`))

    await expect(myModel).toBeVisible()
}