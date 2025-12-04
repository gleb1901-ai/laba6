@dp.message(F.web_app_data)
async def get_data(message: types.Message):
    data = message.web_app_data.data

    if data == "burger":
        await message.answer("Бургер: котлета, сыр, булка, соус. Цена: 250 руб.")
    elif data == "fries":
        await message.answer("Картофель фри: средняя порция. Цена: 150 руб.")
    else:
        await message.answer("Получены данные: " + data)
