class ClickAction {
  // type
  buttonEl: HTMLButtonElement
  targetAreaEl: HTMLDivElement
  // constructor
  constructor(){
  this.buttonEl = document.querySelector('.buttonEl')!as HTMLButtonElement
  this.targetAreaEl = document.querySelector('.target_area')!as HTMLDivElement
  this.configure()
  }

  // reset action
  private resetAction() {
    const targetEl = this.targetAreaEl
    const childTarget = targetEl.firstChild
    if (targetEl.hasChildNodes()) {
      console.log('子要素が見つかりました')
      targetEl.removeChild(childTarget)
    } else {
      console.log('子要素が見つかりませんでした')
    }
  }

  // push action
  private buttonAction() {
    const buttonEl = this.buttonEl
    const targetEl = this.targetAreaEl
    const texts = ['当たり', 'ハズレ', 'まあまあ'];
    
    buttonEl.addEventListener('click', () => {
      this.resetAction()
      const random = Math.floor( Math.random() * texts.length)
      targetEl.insertAdjacentHTML('afterbegin', texts[random])
    })
  }

  private configure() {
    this.buttonAction();
  }
}

  const clickAction = new ClickAction()