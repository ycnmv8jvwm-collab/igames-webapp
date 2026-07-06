bot.on('web_app_data', async (ctx) => {
  const data = JSON.parse(ctx.webAppData.data);
  if (data.action === 'booking') {
    // Отправляем админу уведомление о брони
    await ctx.telegram.sendMessage(ADMIN_CHAT_ID, `Новая бронь! ...`);
  } else if (data.action === 'contact') {
    // Пересылаем сообщение пользователя админу
    await ctx.telegram.sendMessage(ADMIN_CHAT_ID, `Сообщение: ${data.message}`);
  }
});
