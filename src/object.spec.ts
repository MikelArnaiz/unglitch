import {Bang} from './object.ts'

test('Gets type of not non existing property in object as undefined', () => {
    type Dog = { type: 'dog', sound: 'woof' }
    type Fish = { type: 'fish' }
    type Pet = Fish | Dog

    const pet = {} as Pet
    
    // @ts-expect-error
    const sound = pet.sound ?? 'none'

    const sound2 = (pet as any).sound ?? 'none'
    expect(typeof sound2).toBe("any")

    const sound3 = pet.type === 'dog' ? pet.sound : 'none'
    expect(typeof sound3).toBe("sound | none")

    const sound4 = (pet as Bang<Pet>).sound ?? 'none'
    expect(typeof sound4).toBe("sound | none")

})