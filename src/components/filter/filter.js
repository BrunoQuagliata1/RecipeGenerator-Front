import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Checkbox } from 'theme-ui';
import { IoIosTime } from 'react-icons/io';
import { GiMeal, GiMeat, GiCookingPot } from "react-icons/gi";
import { GiCroissant } from "react-icons/gi";
import { FaCarrot, FaBirthdayCake } from "react-icons/fa";
import { timeOptions, cuisineOptions, mealOptions, ingredientOptions, dietOptions, eventOptions, methodOptions } from '../../data/options';

const allOptions = {
  time: { options: timeOptions, icon: IoIosTime },
  cuisine: { options: cuisineOptions, icon: GiCroissant },
  meal: { options: mealOptions, icon: GiMeal },
  ingredient: { options: ingredientOptions, icon: FaCarrot },
  diet: { options: dietOptions, icon: GiMeat },
  event: { options: eventOptions, icon: FaBirthdayCake },
  method: { options: methodOptions, icon: GiCookingPot },
};

const DropdownMenu = ({ buttonName, onToggle, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(new Set());
  const dropdownRef = useRef(null);

  const { options, icon: Icon } = allOptions[buttonName] || { options: [], icon: IoIosTime };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the dropdown is open and the click is outside the dropdown
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        // Additionally, call onClose to reset the active state in the parent component
        if (onClose) onClose();
      }
    };
  
    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listeners on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle the open state

    // If closing the dropdown, call onClose to reset parent state
    if (isOpen && onClose) {
      onClose();
    } else {
      // Notify parent component of the toggle action
      onToggle(buttonName);
    }
  };


  const toggleOption = (optionValue) => {
    setSelectedOptions(prevSelectedOptions => {
      const newSelection = new Set(prevSelectedOptions);
      if (newSelection.has(optionValue)) {
        newSelection.delete(optionValue);
      } else {
        newSelection.add(optionValue);
      }
      return newSelection;
    });
  };

  const handleOptionClick = (optionValue) => {
    toggleOption(optionValue);
  };

  const isSelected = (optionValue) => selectedOptions.has(optionValue);

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
      <Button  onClick={handleButtonClick} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {Icon ? <Icon /> : null}
        {buttonName?.charAt(0).toUpperCase() + buttonName?.slice(1)}
      </Button>
      {isOpen && (
        <Box
          as="ul"
          sx={{
            position: 'absolute',
            listStyleType: 'none',
            margin: 0,
            padding: 2,
            backgroundColor: 'background',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
            zIndex: 100,
            width: '220px',
            maxHeight: '200px',
            overflowY: 'auto', 
          }}
        >
          {options.map((option, index) => (
            <Box
              as="li"
              key={index}
              sx={{ display: 'flex', alignItems: 'center', margin: 1, cursor: 'pointer' }}
              onClick={() => handleOptionClick(option.value)}
            >
              <Checkbox
                checked={isSelected(option.value)}
                onChange={() => {}} // This is to suppress the console warning. Actual toggle is handled by parent <li>
                sx={{ color: 'primary' }} // Customize checkbox color as needed
              />
              {option.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DropdownMenu;