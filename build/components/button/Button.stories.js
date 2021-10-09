import Button from '../Button'

export default {
  title: 'Button',
  componen: Button,
}

export const ButtonStory = () => {
  return (
    <>
      <Button buttonText='This is primary button' variant='primary' />
      <Button buttonText='This is secondary button' variant='secondary' />
      <Button buttonText='This is dangerous button' variant='danger' />
    </>
  )
}
