"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import GiftOptionField from "../ui/GiftOptionField";
import Title from "../ui/Title";
import { FundingOption } from "@/Model/Funding";
import { FundingOptionsState } from "@/store/UploadState/UploadStates";
import { useRecoilCallback, useRecoilState } from "recoil";

const defaultOption: FundingOption & { isSelected: boolean } = {
  name: "",
  price: 0,
  isPickup: false,
  items: [],
  quantity: 0,
  isSelected: false,
  pickupInfo: "",
};

const GiftOptions = () => {
  const [globalOption, setGlobalOption] = useRecoilState(FundingOptionsState);
  console.log(globalOption);

  let defaultOptions: (FundingOption & { isSelected: boolean })[] = [];

  for (let i = 0; i < 3; i++) {
    defaultOptions.push(
      globalOption[i]
        ? { ...globalOption[i], isSelected: true }
        : defaultOption,
    );
  }

  // 기존에 사용자가 입력한 데이터를 불러와서 상태로 저장. 없다면 기본값으로 초기화
  const [options, setOptions] = useState(defaultOptions);

  /**
   * 선택된 옵션만 필터링하여 전역 옵션 데이터(전역 객체)으로 저장
   * 이는 useEffect를 통해 option값이 바뀔 때마다 전역 상태로 저장됨
   */

  // const logRecoilState = useRecoilCallback(
  //   ({ snapshot }) =>
  //     async () => {
  //       const state = await snapshot.getPromise(FundingOptionsState);
  //       console.log("Current Recoil State:", state);
  //     },
  //   [],
  // );

  const newGlobalOptions = useMemo(
    () =>
      options
        .filter((optionWithSelected) => optionWithSelected.isSelected)
        .map(({ isSelected, ...rest }) => rest),
    [options],
  );

  useEffect(() => {
    if (JSON.stringify(newGlobalOptions) !== JSON.stringify(globalOption)) {
      setGlobalOption(newGlobalOptions);
    }
    // logRecoilState();
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
