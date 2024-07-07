"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import GiftOptionField from "../ui/GiftOptionField";
import Title from "../ui/Title";
import { FundingOption } from "@/Model/Funding";
import { FundingOptionsState } from "@/store/UploadState/UploadStates";
import { useSetRecoilState } from "recoil";

const defaultOptions: FundingOption & {
  isSelected: boolean;
  pickupInfo: string;
} = {
  name: "",
  price: 0,
  isPickup: false,
  items: [],
  quantity: 0,
  isSelected: false,
  pickupInfo: "",
};

const GiftOptions = () => {
  const [options, setOptions] = useState([
    { ...defaultOptions },
    { ...defaultOptions },
    { ...defaultOptions },
  ]);
  const setGlobalOption = useSetRecoilState(FundingOptionsState);

  /**
   * 선택된 옵션만 필터링하여 전역 옵션 데이터(전역 객체)으로 저장
   * 이는 useEffect를 통해 option값이 바뀔 때마다 전역 상태로 저장됨
   */
  const newGlobalOptions = useMemo(
    () =>
      options
        .filter((optionWithSelected) => optionWithSelected.isSelected)
        .map(({ isSelected, ...rest }) => rest),
    [options],
  );

  useEffect(() => {
    setGlobalOption(newGlobalOptions);
  }, [newGlobalOptions, setGlobalOption]);

  const changeIsSelected = useCallback((index: number) => {
    setOptions((prev) =>
      prev.map((option, i) =>
        i === index ? { ...option, isSelected: !option.isSelected } : option,
      ),
    );
  }, []);

  const changeName = useCallback((index: number, name: string) => {
    setOptions((prev) => {
      const newOptions = [...prev];
      newOptions[index].name = name;
      return newOptions;
    });
  }, []);

  const changePrice = useCallback((index: number, price: number) => {
    setOptions((prev) => {
      const newOptions = [...prev];
      newOptions[index].price = price;
      return newOptions;
    });
  }, []);

  const changeIsPickup = useCallback((index: number, isPickup: boolean) => {
    setOptions((prev) => {
      const newOptions = [...prev];
      newOptions[index].isPickup = isPickup;
      return newOptions;
    });
  }, []);

  const changeItems = useCallback(
    (index: number, items: { name: string }[]) => {
      setOptions((prev) => {
        const newOptions = [...prev];
        newOptions[index].items = items;
        return newOptions;
      });
    },
    [],
  );

  const changeQuantity = useCallback((index: number, quantity: number) => {
    setOptions((prev) => {
      const newOptions = [...prev];
      newOptions[index].quantity = quantity;
      return newOptions;
    });
  }, []);

  const changePickupInfo = useCallback((index: number, pickupInfo: string) => {
    setOptions((prev) => {
      const newOptions = [...prev];
      newOptions[index].pickupInfo = pickupInfo;
      return newOptions;
    });
  }, []);

  return (
    <>
      <Title headerTitle="옵션 설정" />
      {options.map((option, index) => (
        <GiftOptionField
          key={index}
          option={option}
          changeIsSelected={() => changeIsSelected(index)}
          changeName={(data) => changeName(index, data)}
          changePrice={(data) => changePrice(index, data)}
          changeIsPickup={(data) => changeIsPickup(index, data)}
          changeItems={(data) => changeItems(index, data)}
          changeQuantity={(data) => changeQuantity(index, data)}
          changePickupInfo={(data) => changePickupInfo(index, data)}
        />
      ))}
    </>
  );
};

export default GiftOptions;
