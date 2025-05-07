export const makeAccessToken = async (req, res) => {
  try {
    const token = req?.cookies?.token;
    // console.log(token);
    if (!token) {
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }

    const decodeRefresh = jwt.verify(token, USER_REFRESH_JWT_SECRET);
    if (!decodeRefresh.donorId || !decodeRefresh.donorMail) {
      return res.status(403).json({ success: false, message: "Invalid Token" });
    }
    const payload = {
      donorId: decodeRefresh.donorId,
      donorMail: decodeRefresh.donorMail,
    };
    const accessToken = generateAccessToken(payload);

    return res.status(200).json({ success: true, token: accessToken });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something is Broke :${error.message}`,
    });
  }
};
