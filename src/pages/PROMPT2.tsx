import React, { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PROMPT2.module.css";

const PROMPT2: FunctionComponent = () => {
  const navigate = useNavigate();
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [userInput, setUserInput] = useState(""); // State to store user input

  const onGenerateClick = useCallback(async () => {
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/prompthero/openjourney', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userInput }), // Use the user's input
      });

      if (response.ok) {
        const generatedImage = await response.blob();
        const url = URL.createObjectURL(generatedImage);
        setGeneratedImageUrl(url);

        // Download the generated image
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated_image.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        // Log the response details for debugging
        console.error('API request failed with status:', response.status);
        console.error('Response:', await response.text());
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }, [userInput]); // Include userInput in the dependency array

  // Handle user input changes
  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const onTHUMBELINAContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onPRICESTextClick = useCallback(() => {
    navigate("/price");
  }, [navigate]);

  return (
    <div className={styles.prompt2}>
      <div className={styles.text}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.thumbelina} onClick={onTHUMBELINAContainerClick}>
        <b className={styles.thumbelina1}>{`THUMBELINA      `}</b>
      </div>
      <div className={styles.navbar}>
        <div className={styles.about} onClick={onABOUTTextClick}>
          ABOUT
        </div>
        <div className={styles.generator}>GENERATOR</div>
        <div className={styles.prices} onClick={onPRICESTextClick}>
          PRICES
        </div>
      </div>
      <b className={styles.thumbelinaPrompts}>
        <span className={styles.thumbelinaPromptsTxtContainer}>
          <span>THUMBELINA</span>
          <span className={styles.prompts}> PROMPTS</span>
        </span>
      </b>
      <div className={styles.instanceParent}>
        <input
          className={styles.frameChild}
          placeholder="enter your prompt"
          type="text"
        />
        <button className={styles.vectorParent} onClick={onGenerateClick}>
          <img className={styles.frameItem} alt="" src="/rectangle-10.svg" />
          <b className={styles.generate}>Generate</b>
        </button>
      </div>
      {generatedImageUrl && (
        <div>
          <img src={generatedImageUrl} alt="Generated Image" />
        </div>
      )}
      <div className={styles.searchEnginesAreContainer}>
        <span className={styles.thumbelinaPromptsTxtContainer}>
          <p className={styles.blankLine}>
            Search engines are prompted by Thumbelina.
          </p>
          <p className={styles.blankLine}>
            Look through millions of AI generated photos and compile list of
            questions explored by library to generate    pictures created by
            Thumbelina
          </p>
        </span>
      </div>
    </div>
  );
};

export default PROMPT2;
