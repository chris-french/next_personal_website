export default function Toggle({ text, onToggled, id, checked }) {
    const handleOnChange = (e) => {
      onToggled(e.target.checked);
    };
  
    return (
      <div>
        <input
          className={`   
              mt-[0.3rem] 
              h-[1em] 
              w-[2em]
              appearance-none 
              rounded-[0.4375rem] 
              
              before:pointer-events-none 
              before:absolute 
              before:h-3.5 
              before:w-3.5
              before:rounded-full 
              
              before:content-[''] 
              after:absolute 
              after:z-[2] 
              after:-mt-[2.5px] 
              after:h-5 
              after:w-5 
              after:rounded-full 
              after:border-none 
              
              after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
              after:transition-[background-color_0.2s,transform_0.2s] 
              after:content-[''] 
  
              checked:after:absolute 
              checked:after:z-[2] 
              checked:after:-mt-[2.5px] 
              checked:after:ml-[1.0625rem] 
              checked:after:h-5 
              checked:after:w-5 
              checked:after:rounded-full 
              checked:after:border-none 
              
              checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
              checked:after:transition-[background-color_0.2s,transform_0.2s] 
              checked:after:content-[''] 
              hover:cursor-pointer 
              cursor-pointer
              focus:outline-none 
              focus:ring-0 
              focus:before:scale-100 
              focus:before:opacity-[0.12] 
              focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] 
              focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
              focus:after:absolute 
              focus:after:z-[1] 
              focus:after:block 
              focus:after:h-5 
              focus:after:w-5 
              focus:after:rounded-full 
              focus:after:content-[''] 
              checked:focus:border-primary 
              
              checked:focus:before:ml-[1.0625rem] 
              checked:focus:before:scale-100 
              checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
              checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
              
              
              
              dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] 
              dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]
  
              bg-alt-dark
              dark:bg-light 
  
              checked:bg-alt-dark
              dark:checked:bg-alt-light
  
              before:bg-alt-dark
              dark:before:bg-alt-light
  
              checked:focus:bg-alt-dark
              dark:checked:focus:bg-alt-light
  
              dark:after:bg-off-dark 
              after:bg-off-light
  
              checked:after:bg-alt-dark 
              dark:checked:after:bg-off-light 
          `}
          type="checkbox"
          role="switch"
          id={id}
          checked={checked}
          onChange={handleOnChange}
        />
        <label
          className="pl-[0.5rem] hover:cursor-pointer"
          htmlFor={id}
        >
          {text}
        </label>
      </div>
    );
  }