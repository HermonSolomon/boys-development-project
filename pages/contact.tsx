import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  phone: number;
  address: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    // Perform some action with the form data (e.g. send it to a backend API)
    console.log(data);
    setIsSubmitting(false);
  };
  return (
    <>
      <Header />
      <Box textAlign="center" my={24}>
        <Text color="#653df0" fontSize={24} fontWeight={600}>
          Contact Us
        </Text>
        <Text>
          If you want to discuss work with the Boys’ Development Project please
          email or phone
        </Text>
        <Text>Trefor Lloyd on tlloydbdp@mail.com or 07788781759.</Text>
      </Box>
      <Box w="50%" m="0 auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={6}>
            <Box w="100%">
              {/* name */}
              <FormControl isInvalid={!!errors.name}>
                <FormLabel mb={6} htmlFor="name">
                  Name
                </FormLabel>
                <Input
                  type="text"
                  id="name"
                  bg="transparent"
                  border="none"
                  borderBottom="solid 2px grey"
                  borderRadius="0"
                  boxShadow="var(--shd,0 0 0 transparent)"
                  max-width="100%"
                  mb={2}
                  {...register("name", { required: "Name is required" })}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              {/* surname */}
              <FormControl isInvalid={!!errors.surname}>
                <FormLabel mb={6} htmlFor="surname">
                  Surname
                </FormLabel>
                <Input
                  type="text"
                  id="surname"
                  bg="transparent"
                  border="none"
                  borderBottom="solid 2px grey"
                  borderRadius="0"
                  boxShadow="var(--shd,0 0 0 transparent)"
                  max-width="100%"
                  mb={2}
                  {...register("name", { required: "Name is required" })}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              {/* email */}
              <FormControl isInvalid={!!errors.email}>
                <FormLabel mb={6} htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  border="none"
                  borderBottom="solid 2px grey"
                  borderRadius="0"
                  boxShadow="var(--shd,0 0 0 transparent)"
                  max-width="100%"
                  mb={2}
                  {...register("email", { required: "Email is required" })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
            </Box>

            <Box w="100%">
              {/* phone */}
              <FormControl isInvalid={!!errors.phone}>
                <FormLabel mb={6} htmlFor="phone">
                  Phone
                </FormLabel>
                <Input
                  type="number"
                  id="Phone"
                  border="none"
                  borderBottom="solid 2px grey"
                  borderRadius="0"
                  boxShadow="var(--shd,0 0 0 transparent)"
                  max-width="100%"
                  mb={2}
                  {...register("phone", { required: "Phone is required" })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              {/* address */}
              <FormControl isInvalid={!!errors.address}>
                <FormLabel mb={6} htmlFor="address">
                  Address
                </FormLabel>
                <Input
                  type="text"
                  id="Phone"
                  border="none"
                  borderBottom="solid 2px grey"
                  borderRadius="0"
                  boxShadow="var(--shd,0 0 0 transparent)"
                  max-width="100%"
                  mb={2}
                  {...register("address", { required: "Phone is required" })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              {/* Subject */}
              <FormControl isInvalid={!!errors.subject}>
                <FormLabel mb={6} htmlFor="address">
                  Subject
                </FormLabel>
                <Input
                  type="text"
                  id="Phone"
                  border="none"
                  borderBottom="solid 2px grey"
                  borderRadius="0"
                  boxShadow="var(--shd,0 0 0 transparent)"
                  max-width="100%"
                  mb={4}
                  {...register("subject", { required: "Phone is required" })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
            </Box>
          </Flex>

          <FormControl isInvalid={!!errors.message}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              {...register("message", { required: "Message is required" })}
            />
            <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isSubmitting}
            m="auto"
            variant="outline"
            color="#653cf0"
            border="solid 2px #653cf0"
            borderRadius="20px"
            px="1.5rem"
          >
            Submit
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
