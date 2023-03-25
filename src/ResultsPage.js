import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';

import { useLocation } from 'react-router-dom';

function ResultsPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const answer1 = searchParams.get('q1');
    const answer2 = searchParams.get('q2');
    const answer3 = searchParams.get('q3');
    const answer4 = searchParams.get('q4');
    const answer5 = searchParams.get('q5');
    const answer6 = searchParams.get('q6');


    const navigate = useNavigate();
	  const goBack = () => {
		  navigate('/bodys');
	  }
    const goNext = () =>{
        navigate('/wheels');
    }
    
    const imgStyles = {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    };

    switch(answer1){
        case 'a':
          switch(answer2){
              case 'a':
                switch(answer3){
                  case 'a':
                    switch(answer4){
                      case 'a':
                        switch(answer5){
                            case 'a':
                              switch(answer6){
                                  case 'a':
                                    return(
                                      <ThemeProvider theme={theme}>
                                      <>
                                      <GlobalStyles />
                                        <div ref={node}>
                                            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                            <Menu open={open} setOpen={setOpen} id={menuId} />
                                        </div>
                                        <div>
                                        <img style={imgStyles} src={Logo} alt="Paths program Image" />
                                        </div>
                            
                                        <button
                                          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                        >
                                          Pleasant 
                                          Calm
                                        </button>
                      
                                        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                        <label>Sleeping Rating:</label>
                                        <span style={{ color: 'gold', fontSize: '32px'  }}>
                                          &#9733;
                                        </span>
                                        </div>
                                        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                        <label>Exercise Rating:</label>
                                        <span style={{ color: 'gold', fontSize: '32px'  }}>
                                          &#9733;
                                        </span>
                                        </div>
                                        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                        <label>Healthy Eating Rating:</label>
                                        <span style={{ color: 'gold', fontSize: '32px'  }}>
                                          &#9733;
                                        </span>
                                        </div>
                                        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                        <label>Drinking Water Rating:</label>
                                        <span style={{ color: 'gold', fontSize: '32px'  }}>
                                          &#9733;
                                        </span>
                                        </div>

                                        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                        <label>Calmness Rating:</label>
                                        <span style={{ color: 'gold', fontSize: '32px'  }}>
                                          &#9733;
                                        </span>
                                        </div>
                      
                                        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                            <button onClick={goBack}>Back</button>	
                                            <button onClick={goNext}>Next</button>
                                        </div>
                                        </>
                                        </ThemeProvider>
                                      );

                                  case 'b':
                                    return(
                                    <ThemeProvider theme={theme}>
                                    <>
                                    <GlobalStyles />
                                      <div ref={node}>
                                          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                          <Menu open={open} setOpen={setOpen} id={menuId} />
                                      </div>
                                      <div>
                                      <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                      </div>
                          
                                      <button
                                        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                      >
                                        Pleasant 
                                        Calm
                                      </button>
                    
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Sleeping Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Exercise Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Healthy Eating Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Drinking Water Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>

                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Calmness Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;&#9733;
                                      </span>
                                      </div>
                    
                                      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                          <button onClick={goBack}>Back</button>	
                                          <button onClick={goNext}>Next</button>
                                      </div>
                                      </>
                                      </ThemeProvider>
                                    );

                                  case 'c':
                                    return(
                                    <ThemeProvider theme={theme}>
                                    <>
                                    <GlobalStyles />
                                      <div ref={node}>
                                          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                          <Menu open={open} setOpen={setOpen} id={menuId} />
                                      </div>
                                      <div>
                                      <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                      </div>
                          
                                      <button
                                        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                      >
                                        Pleasant 
                                        Calm
                                      </button>
                    
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Sleeping Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Exercise Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Healthy Eating Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Drinking Water Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>

                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Calmness Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;&#9733;&#9733;
                                      </span>
                                      </div>
                    
                                      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                          <button onClick={goBack}>Back</button>	
                                          <button onClick={goNext}>Next</button>
                                      </div>
                                      </>
                                      </ThemeProvider>
                                    );

                                  case 'd':
                                    return(
                                    <ThemeProvider theme={theme}>
                                    <>
                                    <GlobalStyles />
                                      <div ref={node}>
                                          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                          <Menu open={open} setOpen={setOpen} id={menuId} />
                                      </div>
                                      <div>
                                      <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                      </div>
                          
                                      <button
                                        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                      >
                                        Pleasant 
                                        Calm
                                      </button>
                    
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Sleeping Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Exercise Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Healthy Eating Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Drinking Water Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>

                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Calmness Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;&#9733;&#9733;&#9733;
                                      </span>
                                      </div>
                    
                                      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                          <button onClick={goBack}>Back</button>	
                                          <button onClick={goNext}>Next</button>
                                      </div>
                                      </>
                                      </ThemeProvider>
                                    );

                                  case 'e':
                                    return(
                                    <ThemeProvider theme={theme}>
                                    <>
                                    <GlobalStyles />
                                      <div ref={node}>
                                          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                          <Menu open={open} setOpen={setOpen} id={menuId} />
                                      </div>
                                      <div>
                                      <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                      </div>
                          
                                      <button
                                        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                      >
                                        Pleasant 
                                        Calm
                                      </button>
                    
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Sleeping Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Exercise Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Healthy Eating Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>
                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                      <label>Drinking Water Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;
                                      </span>
                                      </div>

                                      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                      <label>Calmness Rating:</label>
                                      <span style={{ color: 'gold', fontSize: '32px'  }}>
                                        &#9733;&#9733;&#9733;&#9733;&#9733;
                                      </span>
                                      </div>
                    
                                      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                          <button onClick={goBack}>Back</button>	
                                          <button onClick={goNext}>Next</button>
                                      </div>
                                      </>
                                      </ThemeProvider>
                                    );
                                }
                            case 'b':
                              switch(answer6){
                              case 'a':
                                return(
                                  <ThemeProvider theme={theme}>
                                  <>
                                  <GlobalStyles />
                                    <div ref={node}>
                                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                        <Menu open={open} setOpen={setOpen} id={menuId} />
                                    </div>
                                    <div>
                                    <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                    </div>
                        
                                    <button
                                      style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                    >
                                      Pleasant 
                                      Calm
                                    </button>
                  
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Sleeping Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Exercise Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Healthy Eating Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Drinking Water Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;&#9733;
                                    </span>
                                    </div>

                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Calmness Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                  
                                    <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                        <button onClick={goBack}>Back</button>	
                                        <button onClick={goNext}>Next</button>
                                    </div>
                                    </>
                                    </ThemeProvider>
                                  );

                              case 'b':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'c':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'd':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'e':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );
                            }
                            case 'c':
                              switch(answer6){
                              case 'a':
                                return(
                                  <ThemeProvider theme={theme}>
                                  <>
                                  <GlobalStyles />
                                    <div ref={node}>
                                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                        <Menu open={open} setOpen={setOpen} id={menuId} />
                                    </div>
                                    <div>
                                    <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                    </div>
                        
                                    <button
                                      style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                    >
                                      Pleasant 
                                      Calm
                                    </button>
                  
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Sleeping Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Exercise Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Healthy Eating Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Drinking Water Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;&#9733;&#9733;
                                    </span>
                                    </div>

                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Calmness Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                  
                                    <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                        <button onClick={goBack}>Back</button>	
                                        <button onClick={goNext}>Next</button>
                                    </div>
                                    </>
                                    </ThemeProvider>
                                  );

                              case 'b':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'c':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'd':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'e':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );
                            }
                            case 'd':
                              switch(answer6){
                              case 'a':
                                return(
                                  <ThemeProvider theme={theme}>
                                  <>
                                  <GlobalStyles />
                                    <div ref={node}>
                                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                        <Menu open={open} setOpen={setOpen} id={menuId} />
                                    </div>
                                    <div>
                                    <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                    </div>
                        
                                    <button
                                      style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                    >
                                      Pleasant 
                                      Calm
                                    </button>
                  
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Sleeping Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Exercise Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Healthy Eating Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Drinking Water Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;&#9733;&#9733;&#9733;
                                    </span>
                                    </div>

                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Calmness Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                  
                                    <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                        <button onClick={goBack}>Back</button>	
                                        <button onClick={goNext}>Next</button>
                                    </div>
                                    </>
                                    </ThemeProvider>
                                  );

                              case 'b':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'c':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'd':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'e':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );
                            }
                            case 'e':
                              switch(answer6){
                              case 'a':
                                return(
                                  <ThemeProvider theme={theme}>
                                  <>
                                  <GlobalStyles />
                                    <div ref={node}>
                                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                        <Menu open={open} setOpen={setOpen} id={menuId} />
                                    </div>
                                    <div>
                                    <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                    </div>
                        
                                    <button
                                      style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                    >
                                      Pleasant 
                                      Calm
                                    </button>
                  
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Sleeping Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Exercise Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Healthy Eating Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Drinking Water Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;&#9733;&#9733;&#9733;&#9733;
                                    </span>
                                    </div>

                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Calmness Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                  
                                    <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                        <button onClick={goBack}>Back</button>	
                                        <button onClick={goNext}>Next</button>
                                    </div>
                                    </>
                                    </ThemeProvider>
                                  );

                              case 'b':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'c':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'd':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'e':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );
                            }
                        }

                      case 'b':
                        switch(answer5){
                        case 'a':
                          switch(answer6){
                              case 'a':
                                return(
                                  <ThemeProvider theme={theme}>
                                  <>
                                  <GlobalStyles />
                                    <div ref={node}>
                                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                        <Menu open={open} setOpen={setOpen} id={menuId} />
                                    </div>
                                    <div>
                                    <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                    </div>
                        
                                    <button
                                      style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                    >
                                      Pleasant 
                                      Calm
                                    </button>
                  
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Sleeping Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Exercise Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Healthy Eating Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;&#9733;
                                    </span>
                                    </div>
                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                    <label>Drinking Water Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>

                                    <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                    <label>Calmness Rating:</label>
                                    <span style={{ color: 'gold', fontSize: '32px'  }}>
                                      &#9733;
                                    </span>
                                    </div>
                  
                                    <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                        <button onClick={goBack}>Back</button>	
                                        <button onClick={goNext}>Next</button>
                                    </div>
                                    </>
                                    </ThemeProvider>
                                  );

                              case 'b':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'c':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'd':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );

                              case 'e':
                                return(
                                <ThemeProvider theme={theme}>
                                <>
                                <GlobalStyles />
                                  <div ref={node}>
                                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                      <Menu open={open} setOpen={setOpen} id={menuId} />
                                  </div>
                                  <div>
                                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                  </div>
                      
                                  <button
                                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                  >
                                    Pleasant 
                                    Calm
                                  </button>
                
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Sleeping Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Exercise Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Healthy Eating Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;
                                  </span>
                                  </div>
                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                  <label>Drinking Water Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;
                                  </span>
                                  </div>

                                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                  <label>Calmness Rating:</label>
                                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  </div>
                
                                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                      <button onClick={goBack}>Back</button>	
                                      <button onClick={goNext}>Next</button>
                                  </div>
                                  </>
                                  </ThemeProvider>
                                );
                            }
                        case 'b':
                          switch(answer6){
                          case 'a':
                            return(
                              <ThemeProvider theme={theme}>
                              <>
                              <GlobalStyles />
                                <div ref={node}>
                                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                    <Menu open={open} setOpen={setOpen} id={menuId} />
                                </div>
                                <div>
                                <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                </div>
                    
                                <button
                                  style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                >
                                  Pleasant 
                                  Calm
                                </button>
              
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Sleeping Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Exercise Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Healthy Eating Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Drinking Water Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;
                                </span>
                                </div>

                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Calmness Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
              
                                <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                    <button onClick={goBack}>Back</button>	
                                    <button onClick={goNext}>Next</button>
                                </div>
                                </>
                                </ThemeProvider>
                              );

                          case 'b':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'c':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'd':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'e':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );
                        }
                        case 'c':
                          switch(answer6){
                          case 'a':
                            return(
                              <ThemeProvider theme={theme}>
                              <>
                              <GlobalStyles />
                                <div ref={node}>
                                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                    <Menu open={open} setOpen={setOpen} id={menuId} />
                                </div>
                                <div>
                                <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                </div>
                    
                                <button
                                  style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                >
                                  Pleasant 
                                  Calm
                                </button>
              
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Sleeping Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Exercise Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Healthy Eating Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Drinking Water Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;&#9733;
                                </span>
                                </div>

                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Calmness Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
              
                                <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                    <button onClick={goBack}>Back</button>	
                                    <button onClick={goNext}>Next</button>
                                </div>
                                </>
                                </ThemeProvider>
                              );

                          case 'b':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'c':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'd':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'e':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );
                        }
                        case 'd':
                          switch(answer6){
                          case 'a':
                            return(
                              <ThemeProvider theme={theme}>
                              <>
                              <GlobalStyles />
                                <div ref={node}>
                                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                    <Menu open={open} setOpen={setOpen} id={menuId} />
                                </div>
                                <div>
                                <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                </div>
                    
                                <button
                                  style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                >
                                  Pleasant 
                                  Calm
                                </button>
              
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Sleeping Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Exercise Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Healthy Eating Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Drinking Water Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;&#9733;&#9733;
                                </span>
                                </div>

                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Calmness Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
              
                                <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                    <button onClick={goBack}>Back</button>	
                                    <button onClick={goNext}>Next</button>
                                </div>
                                </>
                                </ThemeProvider>
                              );

                          case 'b':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'c':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'd':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'e':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );
                        }
                        case 'e':
                          switch(answer6){
                          case 'a':
                            return(
                              <ThemeProvider theme={theme}>
                              <>
                              <GlobalStyles />
                                <div ref={node}>
                                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                    <Menu open={open} setOpen={setOpen} id={menuId} />
                                </div>
                                <div>
                                <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                                </div>
                    
                                <button
                                  style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                                >
                                  Pleasant 
                                  Calm
                                </button>
              
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Sleeping Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Exercise Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Healthy Eating Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;
                                </span>
                                </div>
                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                                <label>Drinking Water Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;&#9733;&#9733;&#9733;&#9733;
                                </span>
                                </div>

                                <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                                <label>Calmness Rating:</label>
                                <span style={{ color: 'gold', fontSize: '32px'  }}>
                                  &#9733;
                                </span>
                                </div>
              
                                <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                    <button onClick={goBack}>Back</button>	
                                    <button onClick={goNext}>Next</button>
                                </div>
                                </>
                                </ThemeProvider>
                              );

                          case 'b':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'c':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'd':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );

                          case 'e':
                            return(
                            <ThemeProvider theme={theme}>
                            <>
                            <GlobalStyles />
                              <div ref={node}>
                                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                  <Menu open={open} setOpen={setOpen} id={menuId} />
                              </div>
                              <div>
                              <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                              </div>
                  
                              <button
                                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                              >
                                Pleasant 
                                Calm
                              </button>
            
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Sleeping Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Exercise Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Healthy Eating Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;
                              </span>
                              </div>
                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
                              <label>Drinking Water Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>

                              <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                              <label>Calmness Rating:</label>
                              <span style={{ color: 'gold', fontSize: '32px'  }}>
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              </div>
            
                              <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                                  <button onClick={goBack}>Back</button>	
                                  <button onClick={goNext}>Next</button>
                              </div>
                              </>
                              </ThemeProvider>
                            );
                        }
                    }

                      case 'c':

                      case 'd':

                      case 'e':
                    }
                }

              case 'b':
                return(
                  <ThemeProvider theme={theme}>
                <>
                <GlobalStyles />
                  <div ref={node}>
                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                      <Menu open={open} setOpen={setOpen} id={menuId} />
                  </div>
                  <div>
                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                  </div>
      
                  <button
                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                  >
                    Pleasant 
                    Calm
                  </button>

                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                  <label>Sleeping Rating:</label>
                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                    &#9733;&#9733;
                  </span>
                  </div>

                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                      <button onClick={goBack}>Back</button>	
                      <button onClick={goNext}>Next</button>
                  </div>
                  </>
                  </ThemeProvider>
                );

              case 'c':
                return(
                  <ThemeProvider theme={theme}>
                <>
                <GlobalStyles />
                  <div ref={node}>
                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                      <Menu open={open} setOpen={setOpen} id={menuId} />
                  </div>
                  <div>
                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                  </div>
      
                  <button
                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                  >
                    Pleasant 
                    Calm
                  </button>

                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                  <label>Sleeping Rating:</label>
                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                    &#9733;&#9733;&#9733;
                  </span>
                  </div>

                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                      <button onClick={goBack}>Back</button>	
                      <button onClick={goNext}>Next</button>
                  </div>
                  </>
                  </ThemeProvider>
                );

              case 'd':
                return(
                  <ThemeProvider theme={theme}>
                <>
                <GlobalStyles />
                  <div ref={node}>
                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                      <Menu open={open} setOpen={setOpen} id={menuId} />
                  </div>
                  <div>
                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                  </div>
      
                  <button
                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                  >
                    Pleasant 
                    Calm
                  </button>

                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                  <label>Sleeping Rating:</label>
                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                    &#9733;&#9733;&#9733;&#9733;
                  </span>
                  </div>

                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                      <button onClick={goBack}>Back</button>	
                      <button onClick={goNext}>Next</button>
                  </div>
                  </>
                  </ThemeProvider>
                );

              case 'e':
                return(
                  <ThemeProvider theme={theme}>
                <>
                <GlobalStyles />
                  <div ref={node}>
                      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                      <Menu open={open} setOpen={setOpen} id={menuId} />
                  </div>
                  <div>
                  <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
                  </div>
      
                  <button
                    style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
                  >
                    Pleasant 
                    Calm
                  </button>

                  <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
                  <label>Sleeping Rating:</label>
                  <span style={{ color: 'gold', fontSize: '32px'  }}>
                    &#9733;&#9733;&#9733;&#9733;
                  </span>
                  </div>

                  <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                      <button onClick={goBack}>Back</button>	
                      <button onClick={goNext}>Next</button>
                  </div>
                  </>
                  </ThemeProvider>
                );
                  
          }
        
        
        case 'b':
          return(
            <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
            <div>
            <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
            </div>

            <button
              style={{ backgroundColor:'#FCB165', fontSize: '24px', padding: '50px', margin: '8px'  }}>
              Pleasant 
              Agitated
            </button>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
          );

        case 'c':
          return(
            <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
            <div>
            <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
            </div>

            <button
              style={{ backgroundColor:'#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px'  }}>
              Pleasant 
              Agitated
            </button>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
          );

        case 'd':
          return(
            <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
            <div>
            <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
            </div>

            <button
              style={{ backgroundColor:'#FF6E6E', fontSize: '24px', padding: '35px', margin: '10px'  }}>
              Pleasant 
              Agitated
            </button>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
          );
    }
   
}

export default ResultsPage;