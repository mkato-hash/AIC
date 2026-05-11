function createConsultationForm() {
  const form = FormApp.create('AIコンシェルジュ ご相談フォーム');

  form
    .setDescription('AIコンシェルジュへのご相談はこちらからお送りください。')
    .setConfirmationMessage('お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。');

  const emailValidation = FormApp.createTextValidation()
    .setHelpText('メールアドレスの形式で入力してください。')
    .requireTextIsEmail()
    .build();

  form.addTextItem()
    .setTitle('法人名')
    .setRequired(true);

  form.addTextItem()
    .setTitle('お名前')
    .setRequired(true);

  form.addTextItem()
    .setTitle('メールアドレス')
    .setRequired(true)
    .setValidation(emailValidation);

  form.addTextItem()
    .setTitle('電話番号')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('ご相談内容')
    .setRequired(false);

  try {
    form.setPublished(true);
  } catch (error) {
    Logger.log('公開設定はスキップされました: ' + error);
  }

  Logger.log('フォームID: ' + form.getId());
  Logger.log('編集URL: ' + form.getEditUrl());
  Logger.log('回答URL: ' + form.getPublishedUrl());

  return {
    formId: form.getId(),
    editUrl: form.getEditUrl(),
    publishedUrl: form.getPublishedUrl(),
  };
}
