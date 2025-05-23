interface CommonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error: boolean;
    errorMessage: string|undefined;
    errorStyle?: React.CSSProperties;
  }
export default function CommonInput({
    error,
    errorMessage,
    errorStyle,
    ...args
  }: CommonInputProps) {
    return (
      <>
        <input {...args} />
        {error && (
          <p style={errorStyle ? { ...errorStyle } : { color: 'red', fontSize: '12px',marginBottom:'16px',marginTop:'2px' }}>
            {errorMessage}
          </p>
        )}
      </>
    );
  }
  