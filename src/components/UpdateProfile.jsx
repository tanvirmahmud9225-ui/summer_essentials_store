"use client";
import { authClient } from "@/lib/auth-client";
import { Envelope, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, InputGroup, Label, Modal, Surface, TextField } from "@heroui/react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdCheck } from "react-icons/md";
import { TfiEmail, TfiLock } from "react-icons/tfi";

const UpdateProfile = () => {
    const [isVisible, setIsVisible] = useState(false);



    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())


        await authClient.updateUser({
            image: userData.image,
            name: userData.name,
        })

    }



    return (
        <div>
            <Modal>
                <Button variant="secondary">Update Profile</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Envelope className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading className="text-2xl">Update Profile</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                                        {/* name */}
                                        <TextField
                                            className="relative"
                                            type="text"
                                            isRequired

                                            validate={(value) => {
                                                if (value.length < 3) {
                                                    return "Name must be at least 3 characters";
                                                }
                                                return null;
                                            }}
                                        >
                                            <BiUser className="absolute top-4 left-4 text-xl text-gray-600" />
                                            <Input className="pl-11 py-3 text-lg" name="name" placeholder="Enter Your Name" />
                                            <FieldError />
                                        </TextField>
                                        <TextField
                                            className="relative"
                                            isRequired

                                            type="text"
                                            validate={(value) => {
                                                if (value.length < 3) {
                                                    return "Name must be at least 3 characters";
                                                }
                                                return null;
                                            }}
                                        >
                                            <HiOutlinePhoto className="absolute top-4 left-4 text-xl text-gray-600" />
                                            <Input name="image" className="pl-11 py-3 text-lg" placeholder="Photo URL" />
                                            <FieldError />
                                        </TextField>

                                        <Modal.Footer>
                                            <Button type="reset" slot="close" variant="secondary">
                                                reset
                                            </Button>
                                            <Button type="submit" slot="close">Save</Button>
                                        </Modal.Footer>
                                    </Form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default UpdateProfile;